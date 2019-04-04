import * as express from 'express';
import { getAilmentData } from '../controllers/ailments';
const ailmentsRouter = express.Router();

ailmentsRouter.route('/:ailment_id')
  .get(getAilmentData);

export default ailmentsRouter;