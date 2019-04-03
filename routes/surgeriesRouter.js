"use strict";
exports.__esModule = true;
var express = require("express");
var surgeriesRouter = express.Router();
var surgeries_js_1 = require("../controllers/surgeries.js");
surgeriesRouter.route('/')
    .get(surgeries_js_1.getSurgeries)
    .post(surgeries_js_1.postSurgery);
// .all(handle405);
exports["default"] = surgeriesRouter;
