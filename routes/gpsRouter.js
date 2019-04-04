"use strict";
exports.__esModule = true;
var express = require("express");
var gpsRouter = express.Router();
var gps_js_1 = require("../controllers/gps.js");
var errors_js_1 = require("../errors/errors.js");
gpsRouter.route('/')
    .get(gps_js_1.getGps)
    .post(gps_js_1.postGp)
    .all(errors_js_1.handle405);
gpsRouter.route('/:gp_id')
    .get(gps_js_1.getGpByID)["delete"](gps_js_1.deleteGpByID)
    .all(errors_js_1.handle405);
exports["default"] = gpsRouter;
