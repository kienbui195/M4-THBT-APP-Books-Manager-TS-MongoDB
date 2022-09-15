import express from "express";
import BookController from "../controllers/book.controller";
export const webRouter = express.Router();
import multer from "multer";

const bookController = new BookController();
const upload = multer();

webRouter.get('/create', (req, res) => {
    bookController.showFormCreate(req, res);
})

webRouter.post('/create', upload.none(), (req, res) => {
    bookController.getDataCreate(req, res).catch(err => res.render('error'))
})

webRouter.get('/', (req, res) => {
    bookController.showFormHome(req, res).catch(err => res.render('error'))
})

webRouter.get('/:id/update', (req, res) => {
    bookController.showFormUpdate(req, res).catch(err => res.render('error'))
})

webRouter.post('/', upload.none(), (req, res) => {
    bookController.getDataSearch(req, res).catch(err => res.render('error'))
})

webRouter.post('/update',upload.none(), (req, res) => {
    bookController.getDataUpdate(req, res).catch(err => res.render('error'))
})

webRouter.get('/:id/delete', (req, res) => {
    bookController.deleteBook(req, res).catch(err => res.render('error'));
})

