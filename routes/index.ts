import * as express from "express";

module Route {

    /**
     * Index  
     * 
     * @export
     * @class Index
     */
    export class Index {

        /**
         * 
         * 
         * @param {express.Request} req
         * @param {express.Response} res
         * @param {express.NextFunction} next
         */
        public index(req : express.Request, res : express.Response, next : express.NextFunction) {
            res.json({
                title: "Hello Express App"
            });
        }

    }

}

export = Route;