import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Book } from "../models/book";

export default class BookStore {
    /*books: Book[] = [];*/
    bookRegistry = new Map<string, Book>();
    selectedBook: Book | undefined = undefined;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get booksAdd() {
        return Array.from(this.bookRegistry.values());
    }

    loadBooks = async () => {
        this.loadingInitial = true;
        try {
            const books = await agent.Books.list();
            books.forEach(book => {
                this.setBook(book);
            })
            this.setLoadingInitial(false);

        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

    loadBook = async (id: string) => {
        let book = this.getBook(id);
        if (book) {
            this.selectedBook = book;
            return book;
        } else {
            this.loadingInitial = true;
            try {
                book = await agent.Books.details(id);
                this.setBook(book);
                runInAction(() => {
                    this.selectedBook = book;
                }) 
                this.setLoadingInitial(false);
                return book;
            } catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    private setBook = (book: Book) => {
        this.bookRegistry.set(book.id, book);
    }

    private getBook = (id: string) => {
        return this.bookRegistry.get(id);
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    /*selectBook = (id: string) => {
        this.selectedBook = this.bookRegistry.get(id);
    }

    cancelSelectedBook = () => {
        this.selectedBook = undefined;
    }*/

    /*openForm = (id?: string) => {
        id ? this.selectBook(id) : this.cancelSelectedBook();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }*/
}