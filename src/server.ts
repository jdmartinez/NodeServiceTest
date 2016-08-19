import * as express from "express";
import * as path from "path";
import * as morgan from "morgan";
import * as bodyParser from "body-parser";

import { Injector } from "./core/injection/Injector";
import { NotFoundError } from "./models/Errors/NotFoundError";
import { HttpStatusCode } from "./models/HttpStatusCode";
import { RouteLoader } from "./RouteLoader";
import { Logger } from "./Logger";

/**
 * Server class
 *
 * @export
 * @class Server
 */
export class Server {

    /**
     * Application instance
     *
     * @class Server
     * @method instance
     * @static
     * @return Returns the new created injector for this app
     */
    public static instance(): Server {
        return new Server();
    }

    /**
     *
     *
     * @type {express.Application}
     */
    public app : express.Application;

    /**
     * Configure app
     *
     * @class Server
     * @method routes
     * @return void
     */
    private config() {
        // configure body-parser
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));

        // configure static paths
        this.app.use(express.static(path.join(__dirname, "public")));
    }

    /**
     * Error handler
     *
     * @class Server
     * @method onError
     * @return void
     */
    private onError(err: Error & { status: number }, req: express.Request, res: express.Response, next: express.NextFunction) {
        res.status(err.status || HttpStatusCode.InternalServerError);
        res.json(err);
    }

    /**
     * Configure routes
     *
     * @class Server
     * @method setupRoutes
     * @return void
     */
    private setupRoutes() {
        //this.app.use([
        //    StatusRoute.setup(),
        //    IndexRoute.setup()
        //]);

        new RouteLoader(this.app).discover("routes");
    }

    /**
     * Error routes handler
     *
     * @class Server
     * @method setupErrors
     * @return void
     */
    private setupErrors() {
        // Not found
        this.app.use(function(req: express.Request, res: express.Response, next: express.NextFunction) {
            let error = new NotFoundError(`Resource ${req.path} not found`);
            res.status(error.code).send(error);
        });

        // catch other errors
        this.app.use(this.onError);
    }

    /**
     * Error routes handler
     *
     * @class Server
     * @method setupErrors
     * @return void
     */
    private setupLogger() {
        // configure logger
        this.app.use(morgan("dev"));
    }

    /**
     * Start listening
     *
     * @class Server
     * @method start
     * @return void
     */
    public run(port : number) : Server {
        this.app.set("port", port);

        this.app.listen(port, () => {
            Logger.info(`Server started at http://localhost:${port}`);
        });

        return this;
    }

    /**
     * Constructor
     *
     * @class Server
     * @constructor
     */
    constructor() {
        this.app = express();

        Injector.register("Express.Application", this.app);

        this.config();          // Configure application
        this.setupLogger();     // Logging configuration
        this.setupRoutes();     // Routes configuration
        this.setupErrors();     // Error routes handler
    }
}
