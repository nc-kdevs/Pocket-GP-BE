import * as express from 'express';
const patientsRouter = express.Router();
import {getPatientByUsername,updatePatientByUsername,deletePatientByUsername,getAllPatients,postPatient,fetchUserAilments,postUserAilment} from '../controllers/patients.js'
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
.post(postUserAilment)

export default patientsRouter;
