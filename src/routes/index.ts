import { BaseRoute } from "./BaseRoute";
import { InjectConstructor } from "../core/injection/Inject";
import { Application, Router, Request, Response } from "express";


/**
 * Index route configuration
 *
 * @export
 * @class IndexRoute
 * @extends {BaseRoute}
 */
@InjectConstructor("Express.Application")
export class IndexRoute extends BaseRoute {

    constructor(app: Application) {
        super(app);
    }

    public setup(): void {
        console.log("IndexRoute.setup");

        let router = Router();
        router.route("/")
            .get(this.get);

        this.routes.push(router);
    }

    /**
     *
     *
     * @private
     * @returns
     */
    private get() {

        return async(req: Request, res: Response) => {
            res.json({
                title: "Hello Express App with RouteLoader"
            })
        };
    }

}