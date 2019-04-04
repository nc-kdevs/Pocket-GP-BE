import * as express from 'express';
import { getAilmentData, patchAilmentData } from '../controllers/ailments';
const ailmentsRouter = express.Router();

ailmentsRouter.route('/:ailment_id')
  .get(getAilmentData)
  .patch(patchAilmentData);

export default ailmentsRouter;