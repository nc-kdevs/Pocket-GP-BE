import * as express from 'express';
const surgeriesRouter = express.Router();
import { getSurgeries, postSurgery } from '../controllers/surgeries.js';
import app = require('../app.js');
import { handle405 } from '../errors/errors';

surgeriesRouter.route('/')
  .get(getSurgeries)
  .post(postSurgery)
// .all(handle405);

export default surgeriesRouter;
