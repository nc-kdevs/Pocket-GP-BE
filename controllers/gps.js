"use strict";
exports.__esModule = true;
var gps_js_1 = require("../models/gps.js");
exports.getGps = function (req, res, next) {
    gps_js_1.fetchGps()
        .then(function (gps) {
        res.status(200).send({ gps: gps });
    })["catch"](next);
};
