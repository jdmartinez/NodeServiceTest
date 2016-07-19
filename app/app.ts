///

"use strict";

import * as debugFactory from 'debug';
import * as http from 'http';
import * as express from 'express';
import * as path from 'path';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import sampleRoute from './routes/sample';

let staticsPath = __dirname;
let app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(staticsPath, 'public')));