import { User } from "./user";

export interface Profile {
    username: string;
}

export class Profile implements Profile {
    constructor(user: User) {
        this.username = user.username;
    }
}

export interface UserBook {
    id: string;
    title: string;
    authors: string;
    image_url: string;
}