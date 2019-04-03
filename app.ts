import express = require('express');
import cors = require('cors');
import * as bodyParser from 'body-parser';
import apiRouter from './routes/apiRouter.js';
import { Request, Response } from 'express';

const app: express.Application = express();

// for cors access - building front-end
app.use(cors());

// for POST requests!
app.use(bodyParser.json());

app.use('/api', apiRouter);

app.all('/*', (req: Request, res: Response) => {
  res.status(404).send({ status: 404, msg: 'Sorry, not found...' });
});

export = app;