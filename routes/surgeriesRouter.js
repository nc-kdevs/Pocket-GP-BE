"use strict";
exports.__esModule = true;
var express = require("express");
var surgeriesRouter = express.Router();
var surgeries_js_1 = require("../controllers/surgeries.js");
surgeriesRouter.get('/', surgeries_js_1.getSurgeries);
surgeriesRouter.post('/', surgeries_js_1.postSurgery);
exports["default"] = surgeriesRouter;
