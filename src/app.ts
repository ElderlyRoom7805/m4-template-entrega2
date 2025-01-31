import express, { json } from "express";
import { booksRouter } from "./routes/books.routes";
import { hlandleErrors } from "./errors/handleErrors.midleware";
import helmet from "helmet";


export const app = express();

app.use(helmet());

app.use(json());

app.use("/books", booksRouter);

app.use(hlandleErrors.execute);
