"use strict";
exports.__esModule = true;
var patients_js_1 = require("../models/patients.js");
var encryption_js_1 = require("../security/encryption.js");
exports.getPatientByUsername = function (req, res, next) {
    var username = req.params.username;
    var encryptedUsername = encryption_js_1.encrypt(req.params);
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
    patients_js_1.updatePatient(encryptedUsername.username, encryptedPatient)
        .then(function (_a) {
        var patient = _a[0];
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
        var decryptedPatients = encryption_js_1.decrypt(patients);
        res.status(200).send({ patients: decryptedPatients });
    })["catch"](next);
};
exports.postPatient = function (req, res, next) {
    var newPatient = req.body;
    var encryptedPatient = encryption_js_1.encrypt(req.body);
    patients_js_1.addPatient(encryptedPatient)
        .then(function (_a) {
        var patient = _a[0];
        var decryptedPatient = encryption_js_1.decrypt(patient);
        return res.status(201).send({ patient: decryptedPatient });
    })["catch"](next);
};
exports.fetchUserAilments = function (req, res, next) {
    var username = req.params.username;
    var encryptUsername = encryption_js_1.encrypt(req.params);
    patients_js_1.getUserAilments(encryptUsername.username)
        .then(function (ailments) {
        var decryptedAilment = ailments.map(function (ailment) { return encryption_js_1.decrypt(ailment); });
        return res.status(200).send({ ailments: decryptedAilment });
    })["catch"](next);
};
exports.postUserAilment = function (req, res, next) {
    var ailmentObj = req.body;
    var username = req.params.username;
    var encryptedUsername = encryption_js_1.encrypt(req.params);
    var encryptedAilment = encryption_js_1.encrypt(req.body);
    encryptedAilment.patient_username = encryptedUsername.username;
    patients_js_1.createUserAilment(encryptedAilment)
        .then(function (_a) {
        var ailment = _a[0];
        var decryptedAilment = encryption_js_1.decrypt(ailment);
        res.status(201).send({ ailment: decryptedAilment });
    })["catch"](next);
};
