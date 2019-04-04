"use strict";
exports.__esModule = true;
var patients_js_1 = require("../models/patients.js");
exports.getAllPatientsByUsername = function (req, res, next) {
    var username = req.params.username;
    patients_js_1.fetchPatientByUsername(username)
        .then(function (_a) {
        var patient = _a[0];
        res.status(200).send({ patient: patient });
    })["catch"]();
};
