import { NextFunction, Request, Response } from "express";
import { booksDatabase } from "../database/database";
import { AppError } from "../errors/errors";

export class isBookNameValid{
    static execute(req: Request, res: Response, next: NextFunction){
        if(booksDatabase.some((e) => e.name.toLowerCase() === req.body.name?.toLowerCase())){
            throw new AppError(409, "Book already registered.");
        };

        next();
    }
}