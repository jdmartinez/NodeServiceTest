///


"use strict";

import * as debugFactory from 'debug';
import * as http from 'http';
import * as express from 'express';
import * as path from 'path';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import * as indexRoute from './routes/index';

/**
 * Server
 */
class Server {

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
        this.app.use(logger('dev'));

        // configure body-parser
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));

        // configure static paths
        this.app.use(express.static(path.join(__dirname, 'public')));

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
    private onError(err : any, req: express.Request, res: express.Response, next: express.NextFunction) {
        var error = new Error('Not found');
        err.status = 404;        
        next(err);
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
        let router : express.Router;
        router = express.Router();

        // create routes
        var index : indexRoute.Index = new indexRoute.Index();

        // homepage
        router.get('/', index.index.bind(index.index));

        // use router
        this.app.use(router);        
        
    }

    /**
     * Start listening
     * 
     * @class Server
     * @method start
     * @return void
     */
    public run(port : number) {
        this.app.set('port', port);

        this.app.listen(port);
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

var server = Server.instance();

server.run(process.env.PORT || 3000);

export = server.app;