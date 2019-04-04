"use strict";
exports.__esModule = true;
var connection = require("../db/connection");
exports.fetchSurgeries = function () {
    return connection.select('*').from('surgeries');
};
exports.addSurgery = function (newSurgery) {
    return connection.insert(newSurgery).into('surgeries').returning('*');
};
exports.fetchSurgeryByID = function (surgery_id) {
    return connection.select('*').groupBy('surgeries.surgery_id').from('surgeries').where('surgeries.surgery_id', '=', surgery_id).returning('*');
};
exports.updateSurgery = function (surgery_id, _a) {
    var surgery_name = _a.surgery_name, surgery_address = _a.surgery_address;
    var updateObj = {};
    if (surgery_name)
        updateObj.surgery_name = surgery_name;
    if (surgery_address)
        updateObj.surgery_address = surgery_address;
    return connection.select('*').from('surgeries').where({ surgery_id: surgery_id }).update(updateObj).returning('*');
};
exports.deleteSurgery = function (surgery_id) {
    return connection('surgeries').where({ surgery_id: surgery_id }).del();
};
