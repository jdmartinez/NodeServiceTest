import * as Collections from "typescript-collections";
import { Router, Request, Response, NextFunction } from "express";

export type RouteActionFn = (req: Request, res: Response, next: NextFunction) => void;

export interface Routable {
    get: Collections.Dictionary<string, RouteActionFn>;

    setup(): Router;
}

export class BaseRoute implements Routable {

    public get: Collections.Dictionary<string, RouteActionFn>;

    constructor() {
        this.get = new Collections.Dictionary<string, RouteActionFn>();
    }

    public setup(): Router {
        let router = Router();

        return router;
    }

}