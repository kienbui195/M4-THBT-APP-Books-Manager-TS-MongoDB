"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.webRouter = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = __importDefault(require("../controllers/book.controller"));
exports.webRouter = express_1.default.Router();
const multer_1 = __importDefault(require("multer"));
const bookController = new book_controller_1.default();
const upload = (0, multer_1.default)();
exports.webRouter.get('/create', (req, res) => {
    bookController.showFormCreate(req, res);
});
exports.webRouter.post('/create', upload.none(), (req, res) => {
    bookController.getDataCreate(req, res).catch(err => res.render('error'));
});
exports.webRouter.get('/', (req, res) => {
    bookController.showFormHome(req, res).catch(err => res.render('error'));
});
exports.webRouter.get('/:id/update', (req, res) => {
    bookController.showFormUpdate(req, res).catch(err => res.render('error'));
});
exports.webRouter.post('/', upload.none(), (req, res) => {
    bookController.getDataSearch(req, res).catch(err => res.render('error'));
});
exports.webRouter.post('/update', upload.none(), (req, res) => {
    bookController.getDataUpdate(req, res).catch(err => res.render('error'));
});
exports.webRouter.get('/:id/delete', (req, res) => {
    bookController.deleteBook(req, res).catch(err => res.render('error'));
});
//# sourceMappingURL=web.router.js.map