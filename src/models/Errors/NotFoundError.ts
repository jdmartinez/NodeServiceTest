import { AppError } from "./AppError";
import { AppErrorBase } from "./AppErrorBase";
import { HttpStatusCode } from "../HttpStatusCode";

export class NotFoundError extends AppErrorBase {

    public name = "NotFoundError";

    constructor(message: string) {
        super(HttpStatusCode.NotFound, message);        
    }

}