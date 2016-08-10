import { AppError } from "./AppError";
import { HttpStatusCode } from "../HttpStatusCode";

export class AppErrorBase extends Error implements AppError {

    public code: HttpStatusCode;

    constructor(code: HttpStatusCode, message: string) {
        super(message);
        code = code;        
    }

}