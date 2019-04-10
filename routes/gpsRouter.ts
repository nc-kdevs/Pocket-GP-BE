import * as express from 'express';
const gpsRouter = express.Router();
import { getGps, postGp, getGpByID, deleteGpByID } from '../controllers/gps.js'
import { handle405 } from '../errors/errors.js';

gpsRouter.route('/')
  .get(getGps)
  .post(postGp)
  // .all(handle405);

gpsRouter.route('/:gp_id')
  .get(getGpByID)
  .delete(deleteGpByID)
  // .all(handle405);

export default gpsRouter;