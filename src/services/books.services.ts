import e from "express";
import { booksDatabase, setId } from "../database/database";
import { AddBook, Books, servicesInterface, UpdateBook } from "../interfaces/books";

export class BookServices implements servicesInterface{
        createBook(body: AddBook): Books{
            const newDate = new Date();

            const newBook: Books = { 
            id: setId(),
            name: body.name, 
            pages: body.pages, 
            category: body.category, 
            createdAt: newDate,
            updatedAt: newDate,
            };
            booksDatabase.push(newBook);
            return newBook;
        }
    
        getBooks(name?: string): Books[] {
            if(name){
                const bookFilter = booksDatabase.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));
                return bookFilter;
            } else{
                return booksDatabase;
            }
        }
    
        onlyOneBook(id: number){
            const index = booksDatabase.findIndex(e => e.id === id);
            const theBook = booksDatabase[index];
            return theBook;
        }
    
        updatedBook(id: number, body: UpdateBook) {
            const newDate = new Date();
            const index = booksDatabase.findIndex(e => e.id === id);
            const update = {...body, updatedAt: newDate};
            const updatedBook = {...booksDatabase[index], ...update};
            booksDatabase.splice(index, 1, updatedBook);
            return updatedBook;
        }
        
        deleteBook(id: number){
            const index = booksDatabase.findIndex(e => e.id === id);
            booksDatabase.splice(index, 1);
        }
}