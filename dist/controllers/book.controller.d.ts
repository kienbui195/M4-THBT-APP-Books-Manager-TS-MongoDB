import { Request, Response } from "express";
declare class BookController {
    showFormCreate(req: Request, res: Response): void;
    getDataCreate(req: Request, res: Response): Promise<void>;
    showFormHome(req: Request, res: Response): Promise<void>;
    showFormUpdate(req: Request, res: Response): Promise<void>;
    getDataUpdate(req: Request, res: Response): Promise<void>;
    getDataSearch(req: Request, res: Response): Promise<void>;
    deleteBook(req: Request, res: Response): Promise<void>;
}
export default BookController;
