import * as express from 'express';
const patientsRouter = express.Router();
import {getPatientByUsername,updatePatientByUsername,deletePatientByUsername,getAllPatients,postPatient,fetchUserAilments} from '../controllers/patients.js'
import app = require('../app.js')
import {handle405} from '../errors/errors'

patientsRouter.route('/:username')
.get(getPatientByUsername)
.patch(updatePatientByUsername)
.delete(deletePatientByUsername)

patientsRouter.route('/')
.get(getAllPatients)
.post(postPatient)

patientsRouter.route('/:username/ailments')
.get(fetchUserAilments)

export default patientsRouter;
