import * as express from 'express';
const surgeriesRouter = express.Router();
import { getSurgeries, postSurgery, getSurgeryByID, patchSurgeryByID, deleteSurgeryByID } from '../controllers/surgeries.js';
import app = require('../app.js');
import { handle405 } from '../errors/errors';

surgeriesRouter.route('/')
.get(getSurgeries)
.post(postSurgery)
.all(handle405);

surgeriesRouter.route('/:surgery_id')
.get(getSurgeryByID)
.patch(patchSurgeryByID)
.delete(deleteSurgeryByID)
.all(handle405)

export default surgeriesRouter;
