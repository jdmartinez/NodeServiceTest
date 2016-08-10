import * as debugFactory from "debug";
import * as http from "http";
import * as express from "express";
import * as path from "path";
import * as logger from "morgan";
import * as bodyParser from "body-parser";

import { HttpStatusCode } from "./models/HttpStatusCode";
import { IndexRouter } from "./routes/index";


/**
 * Server class
 * 
 * @export
 * @class Server
 */
export class Server {

    
    /**
     * 
     * 
     * @type {express.Application}
     */
    public app : express.Application; 

    /**
     * Application instance
     * 
     * @class Server
     * @method instance
     * @static
     * @return Returns the new created injector for this app
     */
    public static instance() : Server {
        return new Server();
    }

    /**
     * Configure app
     *
     * @class Server
     * @method routes
     * @return void
     */
    private config() {
        // configure logger
        this.app.use(logger("dev"));

        // configure body-parser
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));

        // configure static paths
        this.app.use(express.static(path.join(__dirname, "public")));

        // catch 404 errors
        this.app.use(this.onError);
    }

    /**
     * Error handler
     *
     * @class Server
     * @method onError
     * @return void
     */
    private onError(err : Error & { status: number }, req: express.Request, res: express.Response, next: express.NextFunction) {
        res.status(err.status || HttpStatusCode.InternalServerError);
        res.json(err);
    }

    /**
     * Configure routes
     *
     * @class Server
     * @method routes
     * @return void
     */
    private routes() {
        // get router
        this.app.use("/", IndexRouter.routes()); 
        
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

        this.app.listen(port);

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

        // Configure application
        this.config();

        // Configure routes
        this.routes(); 
    }
}
