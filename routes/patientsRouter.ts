import * as express from 'express';
const patientsRouter = express.Router();
import {getAllPatientsByUsername,updatePatientByUsername} from '../controllers/patients.js'
import app = require('../app.js')
import {handle405} from '../errors/errors'

patientsRouter.route('/:username')
.get(getAllPatientsByUsername)
.patch(updatePatientByUsername)

export default patientsRouter;
