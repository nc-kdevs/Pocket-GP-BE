"use strict";
exports.__esModule = true;
var express = require("express");
var ailments_1 = require("../controllers/ailments");
var ailmentsRouter = express.Router();
ailmentsRouter.route('/:ailment_id')
    .get(ailments_1.getAilmentData)
    .patch(ailments_1.patchAilmentData);
exports["default"] = ailmentsRouter;
