import { HttpStatusCode } from '../HttpStatusCode';

export interface AppError extends Error {
    name: string;
    code: HttpStatusCode;
    message: string;

    toString(): string;
}
