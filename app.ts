import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import apiRouter from './routes/apiRouter.js';

const app = express();

// for cors access - building front-end
app.use(cors());

// for POST requests!
app.use(bodyParser.json());

app.use('/api', apiRouter);

app.all('/*', (req: any, res: any) => {
  res.status(404).send({ status: 404, msg: 'Sorry, not found...' });
});

export = app;