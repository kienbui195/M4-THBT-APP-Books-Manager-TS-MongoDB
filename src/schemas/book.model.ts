import { Schema, model } from "mongoose";

interface IBook {
    type: string,
    title: string,
    author: any,
    publisher: string
}

const bookSchema = new Schema<IBook>({
    type: String,
    title: String,
    author: {type: Schema.Types.ObjectId, ref: "Author"},
    publisher: String,
})

const Book = model<IBook>('Book', bookSchema);

export {Book};