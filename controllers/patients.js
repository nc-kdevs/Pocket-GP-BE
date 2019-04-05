"use strict";
exports.__esModule = true;
var patients_js_1 = require("../models/patients.js");
var encryption_js_1 = require("../security/encryption.js");
exports.getPatientByUsername = function (req, res, next) {
    var username = req.params.username;
    var encryptedUsername = encryption_js_1.encrypt(req.params);
    console.log(encryptedUsername, 'THIS IS THE USERNAME');
    patients_js_1.fetchPatientByUsername(encryptedUsername.username)
        .then(function (_a) {
        var patient = _a[0];
        var decryptedPatient = encryption_js_1.decrypt(patient);
        res.status(200).send({ patient: decryptedPatient });
    })["catch"]();
};
exports.updatePatientByUsername = function (req, res, next) {
    var username = req.params.username;
    var _a = req.body, patient_username = _a.patient_username, patient_password = _a.patient_password, first_name = _a.first_name, surname = _a.surname, telephone = _a.telephone, email = _a.email, address = _a.address, surgery_id = _a.surgery_id, emerg_contact = _a.emerg_contact, general_med = _a.general_med;
    var encryptedUsername = encryption_js_1.encrypt(req.params);
    var encryptedPatient = encryption_js_1.encrypt(req.body);
    console.log(encryptedPatient, 'enc patient');
    console.log(encryptedUsername, 'enc username');
    patients_js_1.updatePatient(encryptedUsername.username, encryptedPatient)
        .then(function (_a) {
        var patient = _a[0];
        console.log(patient, 'PATIENT');
        var decryptedPatient = encryption_js_1.decrypt(patient);
        res.status(200).send({ patient: decryptedPatient });
    })["catch"](next);
};
exports.deletePatientByUsername = function (req, res, next) {
    var username = req.params.username;
    patients_js_1.deletePatient(username)
        .then(function (output) {
        if (output === 1)
            res.sendStatus(204);
        else
            next({ status: 404 });
    })["catch"](next);
};
exports.getAllPatients = function (req, res, next) {
    var surgery_id = req.query.surgery_id;
    patients_js_1.getPatients({ surgery_id: surgery_id })
        .then(function (_a) {
        var patients = _a[0];
        res.status(200).send({ patients: patients });
    })["catch"](next);
};
exports.postPatient = function (req, res, next) {
    var newPatient = req.body;
    patients_js_1.addPatient(newPatient)
        .then(function (_a) {
        var patient = _a[0];
        return res.status(201).send({ patient: patient });
    })["catch"](next);
};
exports.fetchUserAilments = function (req, res, next) {
    var username = req.params.username;
    patients_js_1.getUserAilments(username)
        .then(function (ailments) {
        return res.status(200).send({ ailments: ailments });
    })["catch"](next);
};
exports.postUserAilment = function (req, res, next) {
    var ailmentObj = req.body;
    var username = req.params.username;
    ailmentObj.patient_username = username;
    patients_js_1.createUserAilment(ailmentObj)
        .then(function (_a) {
        var ailment = _a[0];
        res.status(201).send({ ailment: ailment });
    })["catch"](next);
};
