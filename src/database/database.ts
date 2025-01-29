import { Books } from "../interfaces/books";

export const booksDatabase: Books[] = [];

let id = 0;

export const setId = () => {
    id++;
    return id;
}