import express = require('express');
import cors = require('cors');
import * as bodyParser from 'body-parser';
import apiRouter from './routes/apiRouter.js';
import { Request, Response } from 'express';
import {
  handle400, handle404, handle422, handle500,
} from './errors/errors';

const app: express.Application = express();

// for cors access - building front-end
app.use(cors());

// for POST requests!
app.use(bodyParser.json());

app.use('/api', apiRouter);

app.all('/*', (req: Request, res: Response) => {
  res.status(404).send({ status: 404, msg: 'Sorry, not found...' });
});

app.use(handle400);
app.use(handle404);
app.use(handle422);
app.use(handle500);

export = app;