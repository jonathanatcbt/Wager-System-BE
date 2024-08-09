import { Request, Response, NextFunction } from "express"
import * as fs from "fs"
import multer from "multer"
export class Multer {
    
    public upload() {
        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
                const directory ="uploads/avatar/";
                if (!fs.existsSync(directory)) {
                    fs.mkdirSync(directory, { recursive: true });
                }
                cb(null, directory);
            },
            filename: function (req, file, cb) {
                cb(null, Date.now() + "-" + file.originalname);
            },
        });
        return multer({ storage: storage }).single("avatar");
    }
}