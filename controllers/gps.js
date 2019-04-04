"use strict";
exports.__esModule = true;
var gps_js_1 = require("../models/gps.js");
exports.getGps = function (req, res, next) {
    var surgery = req.query.surgery;
    var conditions = {};
    if (surgery)
        conditions['gps.surgery_id'] = surgery;
    gps_js_1.fetchGps(conditions)
        .then(function (gps) {
        res.status(200).send({ gps: gps });
    })["catch"](next);
};
exports.postGp = function (req, res, next) {
    var gp = req.body;
    gps_js_1.addGp(gp)
        .then(function (_a) {
        var newGp = _a[0];
        console.log(newGp);
        res.status(201).send({ gp: newGp });
    })["catch"](next);
};
exports.getGpByID = function (req, res, next) {
};
exports.deleteGpByID = function (req, res, next) {
};
