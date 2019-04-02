export const apiRouter = require('express').Router();
import gpsRouter = require('./gpsRouter');
import patientsRouter = require('./patientsRouter');
import surgeriesRouter = require('./surgeriesRouter');
import ailmentsRouter = require('./ailmentsRouter');

apiRouter.use('/gps', gpsRouter);
apiRouter.use('/patients', patientsRouter);
apiRouter.use('/surgeries', surgeriesRouter);
apiRouter.use('/ailments', ailmentsRouter);
