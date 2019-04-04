"use strict";
exports.__esModule = true;
var express = require("express");
var patientsRouter = express.Router();
var patients_js_1 = require("../controllers/patients.js");
patientsRouter.route('/:username')
    .get(patients_js_1.getPatientByUsername)
    .patch(patients_js_1.updatePatientByUsername)["delete"](patients_js_1.deletePatientByUsername);
patientsRouter.route('/')
    .get(patients_js_1.getAllPatients)
    .post(patients_js_1.postPatient);
patientsRouter.route('/:username/ailments')
    .get(patients_js_1.fetchUserAilments);
exports["default"] = patientsRouter;
