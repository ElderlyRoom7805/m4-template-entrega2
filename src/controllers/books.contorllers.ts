import { Response, Request } from "express";
import { BookServices } from "../services/books.services";
import { booksDatabase } from "../database/database";
import { string } from "zod";


export class booksControllers {
    
    createBook(req: Request, res: Response): Response{
        const newBookServices = new BookServices();
        const newBook = newBookServices.createBook(req.body);
        return res.status(201).json(newBook);
    }

    getBooks(req: Request, res: Response): Response{
        const newBookServices = new BookServices();
        const newBook = newBookServices.getBooks(req.query.search as string);
        
        return res.status(200).json(newBook);
    }

    onlyOneBook(req: Request, res: Response): Response{
        const newBookServices = new BookServices();
        const book = newBookServices.onlyOneBook(Number(req.params.id));
        return res.status(200).json(book);
    }

    updatedBook(req: Request, res: Response): Response{
        const newBookServices = new BookServices();
        const updatedBook = newBookServices.updatedBook(Number(req.params.id), req.body);
        return res.status(200).json(updatedBook);
    }
    
    deleteBook(req: Request, res: Response): Response{
        const newBookServices = new BookServices();
        newBookServices.deleteBook(Number(req.params.id));
        return res.status(204).json();
    }
};