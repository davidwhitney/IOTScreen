import path = require("path");
import { Request, Response, NextFunction, response } from "express";

export default class ImageHandler {
    handle(req: Request, res: Response, next: NextFunction): void {
        const key: string = req.originalUrl.replace(req.baseUrl, "");
        res.sendFile(path.join(__dirname, "__imagecache__", key + ".png"));
    }
}