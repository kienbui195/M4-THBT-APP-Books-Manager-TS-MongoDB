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
    bookController.getDataCreate(req, res).catch(err => console.log(err.message))
})

webRouter.get('/', (req, res) => {
    bookController.showFormHome(req, res).catch(err => console.log(err.message))
})