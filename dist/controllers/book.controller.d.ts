import { Request, Response } from "express";
declare class BookController {
    showFormCreate(req: Request, res: Response): void;
    getDataCreate(req: Request, res: Response): Promise<void>;
    showFormHome(req: Request, res: Response): Promise<void>;
}
export default BookController;
