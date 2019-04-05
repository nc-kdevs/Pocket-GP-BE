import * as express from 'express';
const apiRouter = express.Router();

import gpsRouter from './gpsRouter';
import patientsRouter from './patientsRouter';
import surgeriesRouter from './surgeriesRouter';
import ailmentsRouter from './ailmentsRouter';

apiRouter.use('/gps', gpsRouter);
apiRouter.use('/patients', patientsRouter);
apiRouter.use('/surgeries', surgeriesRouter);
apiRouter.use('/ailments', ailmentsRouter);

export default apiRouter;
