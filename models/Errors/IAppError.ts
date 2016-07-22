import { HttpStatusCode } from '../HttpStatusCode';

export interface IAppError {
    getStatusCode() : HttpStatusCode;
}