"use strict";
exports.__esModule = true;
var connection = require("../db/connection");
exports.fetchPatientByUsername = function (username) {
    return connection.select('*').from('patients').where('patient_username', username);
};
exports.updatePatient = function (username, _a) {
    var patient_username = _a.patient_username, patient_password = _a.patient_password, first_name = _a.first_name, surname = _a.surname, telephone = _a.telephone, email = _a.email, address = _a.address, surgery_id = _a.surgery_id, emerg_contact = _a.emerg_contact, general_med = _a.general_med;
    var updatePatientDetails = {};
    if (patient_username)
        updatePatientDetails.patient_username = patient_username;
    if (patient_password)
        updatePatientDetails.patient_password = patient_password;
    if (first_name)
        updatePatientDetails.first_name = first_name;
    if (surname)
        updatePatientDetails.surname = surname;
    if (telephone)
        updatePatientDetails.telephone = telephone;
    if (email)
        updatePatientDetails.email = email;
    if (address)
        updatePatientDetails.address = address;
    if (surgery_id)
        updatePatientDetails.surgery_id = surgery_id;
    if (emerg_contact)
        updatePatientDetails.emerg_contact = emerg_contact;
    if (general_med)
        updatePatientDetails.general_med = general_med;
    return connection('patients').where('patient_username', username).update(updatePatientDetails).returning('*');
};
exports.deletePatient = function (username) {
    return connection.select('*').from('patients').where('patient_username', username).del();
};
