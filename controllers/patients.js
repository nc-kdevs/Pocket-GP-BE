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
exports.updatePatientByUsername = function (req, res, next) {
    var username = req.params.username;
    var _a = req.body, patient_username = _a.patient_username, patient_password = _a.patient_password, first_name = _a.first_name, surname = _a.surname, telephone = _a.telephone, email = _a.email, address = _a.address, surgery_id = _a.surgery_id, emerg_contact = _a.emerg_contact, general_med = _a.general_med;
    patients_js_1.updatePatient(username, req.body)
        .then(function (_a) {
        var patient = _a[0];
        res.status(200).send({ patient: patient });
    })["catch"](next);
};
