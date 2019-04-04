"use strict";
exports.__esModule = true;
var connection = require("../db/connection");
exports.fetchPatientByUsername = function (username) {
    return connection.select('*').from('patients').where('patient_username', username);
};
