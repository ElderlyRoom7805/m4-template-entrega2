export interface Books{
    id: number,
    name: string,
    pages: number,
    category?: string,
    createdAt: Date,
    updatedAt: Date,
}

export type AddBook = Pick<Books, "name" | "pages" | "category">;
export type UpdateBook = Partial<AddBook>;

export interface servicesInterface {
    createBook(body: UpdateBook): Books;
    getBooks(name?: string): Books[];
    onlyOneBook(id: number): Books;
    updatedBook(id: number, body: UpdateBook): Books;
    deleteBook(id: number): void;
}
