"use strict";
exports.__esModule = true;
var surgeries_js_1 = require("../models/surgeries.js");
exports.getSurgeries = function (req, res, next) {
    surgeries_js_1.fetchSurgeries().then(function (surgeries) {
        console.log(surgeries);
        res.status(200).send({ surgeries: surgeries });
    });
};
