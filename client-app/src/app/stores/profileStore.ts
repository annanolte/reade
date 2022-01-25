import { makeAutoObservable, reaction, runInAction } from "mobx";
import agent from "../api/agent";
import { Profile, UserBook } from "../models/profile";
import { store } from "./store";

export default class ProfileStore {
    profile: Profile | null = null;
    loadingProfile = false;
    loading = false;
    activeTab = 0;
    userBooks: UserBook[] = [];
    loadingBooks = false;

    constructor() {
        makeAutoObservable(this);
    }

    setActiveTab = (activeTab: any) => {
        this.activeTab = activeTab;
    }

    get isCurrentUser() {
        if (store.userStore.user && this.profile) {
            return store.userStore.user.username === this.profile.username;
        }
        return false;
    }

    loadProfile = async (username: string) => {
        this.loadingProfile = true;
        try {
            const profile = await agent.Profiles.get(username);
            runInAction(() => {
                this.profile = profile;
                this.loadingProfile = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => this.loadingProfile = false);
        }
    }

    loadUserBooks = async (username: string) => {
        this.loadingBooks = true;
        try {
            const books = await agent.Profiles.listBooks(username);
            runInAction(() => {
                this.userBooks = books;
                this.loadingBooks = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loadingBooks = false;
            })
        }
    }

}