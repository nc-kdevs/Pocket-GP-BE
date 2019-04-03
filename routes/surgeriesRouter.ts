import * as express from 'express';
const surgeriesRouter = express.Router();
import { getSurgeries } from '../controllers/surgeries.js';

surgeriesRouter.get('/', getSurgeries);

export default surgeriesRouter;
