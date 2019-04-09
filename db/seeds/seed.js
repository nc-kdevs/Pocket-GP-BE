"use strict";
exports.__esModule = true;
var _a = require('../data/index.js'), patientsData = _a.patientsData, gpsData = _a.gpsData, ailmentsData = _a.ailmentsData, surgeryData = _a.surgeryData;
var encrypt = require('../../security/encryption.js').encrypt;
exports.seed = function (knex, Promise) { return knex.migrate
    .rollback()
    .then(function () { return knex.migrate.latest(); })
    .then(function () {
    var encryptedSurgeryData = surgeryData.map(function (surgery) { return encrypt(surgery); });
    return knex('surgeries').insert(encryptedSurgeryData).returning('*');
})
    .then(function () {
    var encryptedGpData = gpsData.map(function (gp) { return encrypt(gp); });
    return knex('gps').insert(encryptedGpData).returning('*');
})
    .then(function () {
    var encryptedPatientData = patientsData.map(function (patient) { return encrypt(patient); });
    return knex('patients').insert(encryptedPatientData).returning('*');
})
    .then(function () {
    var encryptedAilmentData = ailmentsData.map(function (ailment) { return encrypt(ailment); });
    return knex('ailments').insert(encryptedAilmentData).returning('*');
}); };
