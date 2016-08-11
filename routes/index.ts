import { Router, Request, Response } from "express";

/**
 * Index route class
 * 
 * @export
 * @class IndexRoute
 */
export class IndexRoute {

    /**
     * index route configuration
     * 
     * @static
     * @returns Router
     */
    static setup(): Router {
        
        return Router()
            .get("/", async(req: Request, res: Response) => {
                res.json({
                    title: "Hello Express App"
                });
            });

    }

}