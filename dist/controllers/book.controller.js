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
}
exports.default = BookController;
//# sourceMappingURL=book.controller.js.map