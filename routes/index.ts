import { Router, Request, Response } from "express";

export class IndexRouter {

    static routes(): Router {
        
        return Router()
            .get("/", async(req: Request, res: Response) => {
                res.json({
                    title: "Hello Express App"
                });
            });

    }

}