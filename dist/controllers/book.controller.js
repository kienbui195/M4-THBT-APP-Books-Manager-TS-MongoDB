"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const author_model_1 = require("../schemas/author.model");
const book_model_1 = require("../schemas/book.model");
class BookController {
    showFormCreate(req, res) {
        res.render('create');
    }
    async getDataCreate(req, res) {
        const newAuthor = new author_model_1.Author({
            name: req.body.author
        });
        const newBook = new book_model_1.Book({
            type: req.body.type,
            title: req.body.title,
            author: newAuthor,
            publisher: req.body.publisher
        });
        await newAuthor.save();
        await newBook.save();
        res.redirect('/');
    }
    async showFormHome(req, res) {
        let data = await book_model_1.Book.find();
        res.render('home', { data: data });
    }
    async showFormUpdate(req, res) {
        let data = await book_model_1.Book.findOne({ _id: req.params.id });
        res.render('update', { data: data });
    }
    async getDataUpdate(req, res) {
        await book_model_1.Book.findOneAndUpdate({ _id: req.body.id }, {
            type: req.body.type,
            title: req.body.title,
            author: req.body.author,
            publisher: req.body.publisher
        });
        res.redirect('/');
    }
    async getDataSearch(req, res) {
        let data = await book_model_1.Book.find({ name: new RegExp(`${req.body.keyword}`) });
        if (data.length > 0) {
            res.render('home', { data: data });
        }
        else
            res.render('search');
    }
    async deleteBook(req, res) {
        await book_model_1.Book.findOneAndDelete({ _id: req.params.id });
        res.redirect('/');
    }
}
exports.default = BookController;
//# sourceMappingURL=book.controller.js.map