"use strict";
exports.__esModule = true;
var surgeries_js_1 = require("../models/surgeries.js");
exports.getSurgeries = function (req, res, next) {
    surgeries_js_1.fetchSurgeries()
        .then(function (surgeries) {
        res.status(200).send({ surgeries: surgeries });
    })["catch"](next);
};
exports.postSurgery = function (req, res, next) {
    var newSurgery = req.body;
    surgeries_js_1.addSurgery(newSurgery)
        .then(function (_a) {
        var surgery = _a[0];
        return res.status(201).send({ surgery: surgery });
    })["catch"](next);
};
