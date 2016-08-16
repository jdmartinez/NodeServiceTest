import * as fs from "fs";

import { BaseRoute } from "../core/BaseRoute";
import { Router, Request, Response, NextFunction } from "express";

const DEFAULT_PATH = "/status";

/**
 * Service status route class
 *
 * @export
 * @class Health
 * @see Based on https://github.com/palmerabollo/express-ping
 */
export class StatusRoute extends BaseRoute {

    private packageInfo: any;

    constructor() {
        super();

        let packageInfo = JSON.parse(fs.readFileSync("package.json", "utf-8"));
    }

    @Get("/status")
    public getStatus() {
        this.get.setValue(DEFAULT_PATH, async(req: Request, res: Response, next: NextFunction) => {
            if (req.path === DEFAULT_PATH) {
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
            } else {
                next();
            }
        });
    }

}