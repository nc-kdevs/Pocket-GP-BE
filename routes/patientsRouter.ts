import * as express from 'express';
const patientsRouter = express.Router();
import {getAllPatientsByUsername} from '../controllers/patients.js'
import app = require('../app.js')
import {handle405} from '../errors/errors'

patientsRouter.route('/:username')
.get(getAllPatientsByUsername)

export default patientsRouter;
