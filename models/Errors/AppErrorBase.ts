import { IAppError } from "./IAppError";
import { HttpStatusCode } from "../HttpStatusCode";

export class AppErrorBase extends Error implements IAppError {

    constructor(message: string) {
        super(message);
    }

    public GetStatusCode(): HttpStatusCode {
        return HttpStatusCode.ServerError;
    }
}