import { Profile } from "./profile";

export interface Book {
    id: string;
    title: string;
    authors: string;
    isbn: string;
    description: string;
    publishDate: string;
    pages: number;
    image_url: string;
    isReading?: boolean;
    readers?: Profile[];
}