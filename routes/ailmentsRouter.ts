import * as express from 'express';
import { getAilmentData, patchAilmentData, deleteAilmentData } from '../controllers/ailments';
const ailmentsRouter = express.Router();
import { getImgData } from '../controllers/patients';

ailmentsRouter.route('/:ailment_id')
  .get(getAilmentData)
  .patch(patchAilmentData)
  .delete(deleteAilmentData);

ailmentsRouter.route('/:ailment_id/images')
  .get(getImgData);

export default ailmentsRouter;