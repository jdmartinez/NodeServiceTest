import * as fs from "fs";
import * as path from "path";

import { Router } from "express";
import { BaseRoute } from "./core/BaseRoute";

export class RouteLoader {

    private dir: string;
    private routeList: Array<Router>;

    get routes(): Array<Router> { return this.routeList; }

    constructor(dir: string = "./routes") {
        this.dir = dir;
    }

    public discover(): Array<Router> {
        this.routeList = this.load(this.dir);
        return this.routes;
    }

    private load(dir: string): Array<Router> {
        let routers: Array<Router> = new Array<Router>();

        let folder = path.join(__dirname, dir);
        let files = fs.readdirSync(folder);

        files.forEach(file => {
            if (!/\.js$/.test(file)) {
                let nextLv = path.join(folder, file);
                let stat = fs.statSync(nextLv);

                if (stat.isDirectory()) {
                    routers.concat(this.load(nextLv));
                }
            } else {
                let obj: BaseRoute = <BaseRoute>require(path.join(folder, file));
                let route = "/" + file.replace(/\.js$/, "");

                routers.push(obj.setup());
            }
        });

        return routers;
    }

}