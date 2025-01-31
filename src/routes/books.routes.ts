import { Router } from "express";
import { booksControllers } from "../controllers/books.contorllers";
import { isBookValid } from "../middlewares/isValid.middlewares";
import { isBookNameValid } from "../middlewares/isNameValid.middlewares";
import { validadeBody } from "../middlewares/isCreate.middlewares";
import { createSchemaBody, updateSchemaBody } from "../schemas/create.schema";

export const booksRouter = Router();

const newBooksControllers = new booksControllers();

booksRouter.post("/", validadeBody.execute({body: createSchemaBody}), isBookNameValid.execute, newBooksControllers.createBook);

booksRouter.get("/", newBooksControllers.getBooks);

booksRouter.get("/:id", isBookValid.execute, newBooksControllers.onlyOneBook);

booksRouter.patch("/:id", isBookValid.execute, validadeBody.execute({body: updateSchemaBody}), isBookNameValid.execute, newBooksControllers.updatedBook);

booksRouter.delete("/:id", isBookValid.execute, newBooksControllers.deleteBook);