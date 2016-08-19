import * as fs from "fs";
import * as path from "path";

import { Application, Router } from "express";
import { BaseRoute } from "./routes/BaseRoute";

export class RouteLoader {

    private app: Application;

    constructor(app: Application) {
        this.app = app;
    }

    public discover(dir: string | Array<string>): RouteLoader {
        if (typeof dir === "string") {
            this.load(dir);
        } else if (dir instanceof Array) {
            (<Array<string>>dir).forEach(d => this.load(d));
        }
        return this;
    }

    private load(dir: string) {
        let folder = path.join(__dirname, dir);
        let files = fs.readdirSync(folder);

        files.forEach(file => {
            if (!/\.js$/.test(file)) {
                let nextLv = path.join(folder, file);
                let stat = fs.statSync(nextLv);

                if (stat.isDirectory()) {
                    this.load(nextLv);
                }
            } else {
                //require(path.join(folder, file));
                let obj = <BaseRoute>require(path.join(folder, file));
                let route  = <BaseRoute>Object.create(obj);
            }
        });
    }

}