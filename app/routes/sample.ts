///

"use strict";

import * as express from 'express';

let router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
    res.json({
        title: 'Hello Express'
    });
});

export default router;