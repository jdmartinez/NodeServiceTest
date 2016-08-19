import * as fs from "fs";

import { BaseRoute } from "./BaseRoute";
import { Application, Router, Request, Response, NextFunction } from "express";

/**
 * Service status route class
 *
 * @export
 * @class StatusRoute
 * @see Based on https://github.com/palmerabollo/express-ping
 */
export class StatusRoute extends BaseRoute {

    private packageInfo: any;

    public setup(): void {
        console.log("IndexRoute.setup");

        this.packageInfo = JSON.parse(fs.readFileSync("package.json", "utf-8"));

        let router = Router();

        router.route("/status")
            .get(this.getStatus);

        this.routes.push(router);
    }

    private getStatus() {
        return async(req: Request, res: Response, next: NextFunction) => {
            res.json({
                timestamp: new Date(Date.now()).toLocaleDateString(),
                uptime: process.uptime(),

                application: {
                    name: this.packageInfo.name,
                    version: this.packageInfo.version,
                    description: this.packageInfo.description,
                    pid: process.pid,
                    versions: process.versions,
                    nodeEnvirontment: process.env.NODE_ENV
                }
            });
        };
    }

}