
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

    async showFormUpdate(req:Request, res: Response) {
        let data = await Book.findOne({ _id: req.params.id });   
        res.render('update', { data: data });
    }
    
    async getDataUpdate(req: Request, res: Response) {
        await Book.findOneAndUpdate({ _id: req.body.id }, {
            type: req.body.type,
            title: req.body.title,
            author: req.body.author,
            publisher: req.body.publisher
        });
        res.redirect('/');
    }

    async getDataSearch(req: Request, res: Response) {
        let data = await Book.find({ name: new RegExp(`${req.body.keyword}`) });
        if (data.length > 0) {
            res.render('home', { data: data });
        } else res.render('search');
    }

    async deleteBook(req: Request, res: Response) {
        await Book.findOneAndDelete({ _id: req.params.id });
        res.redirect('/');
    }
}

export default BookController;