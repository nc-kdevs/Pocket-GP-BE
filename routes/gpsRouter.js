"use strict";
exports.__esModule = true;
var express = require("express");
var gpsRouter = express.Router();
var gps_js_1 = require("../controllers/gps.js");
gpsRouter.route('/')
    .get(gps_js_1.getGps)
    .post(gps_js_1.postGp);
// .all(handle405);
gpsRouter.route('/:gp_id')
    .get(gps_js_1.getGpByID)["delete"](gps_js_1.deleteGpByID);
// .all(handle405);
exports["default"] = gpsRouter;
