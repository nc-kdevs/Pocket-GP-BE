"use strict";
exports.__esModule = true;
var express = require("express");
var surgeriesRouter = express.Router();
var surgeries_js_1 = require("../controllers/surgeries.js");
var errors_1 = require("../errors/errors");
surgeriesRouter.route('/')
    .get(surgeries_js_1.getSurgeries)
    .post(surgeries_js_1.postSurgery)
    .all(errors_1.handle405);
surgeriesRouter.route('/:surgery_id')
    .get(surgeries_js_1.getSurgeryByID)
    .all(errors_1.handle405);
exports["default"] = surgeriesRouter;
