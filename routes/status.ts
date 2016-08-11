import * as fs from "fs";
import { Router, Request, Response, NextFunction } from "express";

const DEFAULT_PATH = "/status";

/**
 * Service status route class
 * 
 * @export
 * @class Health
 * @see Based on https://github.com/palmerabollo/express-ping
 */
export class StatusRoute {     

    /**
     * Status route configuration
     * 
     * @static
     * @param {string} [path=""]
     * @returns Router
     */
    static setup(path:string = ""): Router {

        path = path || DEFAULT_PATH;
        let pjson = JSON.parse(fs.readFileSync("package.json", "utf-8"))

        return Router()
            .get(path, function(req: Request, res: Response, next: NextFunction) {
                if (req.path === path) {
                    res.json({
                        timestamp: new Date(Date.now()).toLocaleDateString(),
                        uptime: process.uptime(),

                        application: {
                            name: pjson.name,
                            version: pjson.version,
                            description: pjson.description,
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