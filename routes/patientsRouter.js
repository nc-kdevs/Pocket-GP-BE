"use strict";
exports.__esModule = true;
var express = require("express");
var patientsRouter = express.Router();
var patients_js_1 = require("../controllers/patients.js");
patientsRouter.route('/:username')
    .get(patients_js_1.getAllPatientsByUsername);
exports["default"] = patientsRouter;
