"use strict";
exports.__esModule = true;
var express = require("express");
var patients_js_1 = require("../controllers/patients.js");
var patientsRouter = express.Router();
patientsRouter.route('/');
patientsRouter.route('/:username/ailments')
    .get(patients_js_1.fetchUserAilments);
exports["default"] = patientsRouter;
