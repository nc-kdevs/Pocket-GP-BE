import * as express from 'express';
import {fetchUserAilments} from '../controllers/patients.js'
const patientsRouter = express.Router();

patientsRouter.route('/')

patientsRouter.route('/:username/ailments')
    .get(fetchUserAilments)

export default patientsRouter;
