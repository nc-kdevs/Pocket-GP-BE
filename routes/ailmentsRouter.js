"use strict";
exports.__esModule = true;
var express = require("express");
var ailments_1 = require("../controllers/ailments");
var ailmentsRouter = express.Router();
var patients_1 = require("../controllers/patients");
ailmentsRouter.route('/:ailment_id')
    .get(ailments_1.getAilmentData)
    .patch(ailments_1.patchAilmentData)["delete"](ailments_1.deleteAilmentData);
ailmentsRouter.route('/:ailment_id/images')
    .get(patients_1.getImgData);
exports["default"] = ailmentsRouter;
