import * as express from 'express';
import { getAilmentData, patchAilmentData, deleteAilmentData } from '../controllers/ailments';
const ailmentsRouter = express.Router();

ailmentsRouter.route('/:ailment_id')
  .get(getAilmentData)
  .patch(patchAilmentData)
  .delete(deleteAilmentData);

export default ailmentsRouter;