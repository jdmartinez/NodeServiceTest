import { BaseRoute } from "../core/BaseRoute";
import { Router, Request, Response } from "express";

/**
 * Index route class
 *
 * @export
 * @class IndexRoute
 */
export class IndexRoute extends BaseRoute {

    /**
     * index route configuration
     *
     * @static
     * @returns Router
     */
    //@Get("/")
    public get(): Router {

        return Router()
            .use(async(req: Request, res: Response) => {
                res.json({
                    title: "Hello Express App"
                })
            );
    }

}