import * as express from 'express';
const patientsRouter = express.Router();
import {getAllPatientsByUsername,updatePatientByUsername,deletePatientByUsername} from '../controllers/patients.js'
import app = require('../app.js')
import {handle405} from '../errors/errors'

patientsRouter.route('/:username')
.get(getAllPatientsByUsername)
.patch(updatePatientByUsername)
.delete(deletePatientByUsername)

export default patientsRouter;
