import { IAppError } from "./IAppError";
import { AppErrorBase } from "./AppErrorBase";
import { HttpStatusCode } from "../HttpStatusCode";

export class NotFoundError extends AppErrorBase implements IAppError {

    constructor(message: string) {
        super(message);
    }

    public GetStatusCode(): HttpStatusCode {
        return HttpStatusCode.NotFound;
    }
}