import * as express from 'express';
const gpsRouter = express.Router();
import { getGps } from '../controllers/gps.js'
import { handle405 } from '../errors/errors.js';

gpsRouter.route('/')
  .get(getGps)
  .all(handle405);

export default gpsRouter;