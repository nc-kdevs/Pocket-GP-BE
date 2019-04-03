import * as express from 'express';
const surgeriesRouter = express.Router();
import { getSurgeries, postSurgery } from '../controllers/surgeries.js';

surgeriesRouter.get('/', getSurgeries);
surgeriesRouter.post('/', postSurgery)

export default surgeriesRouter;
