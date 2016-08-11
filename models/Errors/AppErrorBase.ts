import { AppError } from "./AppError";
import { HttpStatusCode } from "../HttpStatusCode";

export class AppErrorBase implements AppError {

    public name = "ApplicationError";
    public code: HttpStatusCode;
    public message: string;

    constructor(code: HttpStatusCode, message: string) {
        this.code = code;
        this.message = message;
    }

    public toString(): string {
        return `${this.name}: (${this.code}) ${this.message}`;
    }

}