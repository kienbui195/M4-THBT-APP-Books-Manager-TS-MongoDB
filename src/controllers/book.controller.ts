
import {Request, Response} from "express";
import {Author} from "../schemas/author.model"
import {Book} from "../schemas/book.model";

class BookController {

    showFormCreate(req: Request, res: Response) {
        res.render('create');
    }

    async getDataCreate(req: Request, res: Response) {
        const newAuthor = new Author({
            name: req.body.author
        })
        const newBook = new Book({
            type: req.body.type,
            title: req.body.title,
            author: newAuthor,
            publisher: req.body.publisher
        });
        await newAuthor.save();
        await newBook.save();
        res.redirect('/');
    }

    async showFormHome(req: Request, res: Response) {
        let data = await Book.find();
        res.render('home', { data: data });
    }

    
}

export default BookController;