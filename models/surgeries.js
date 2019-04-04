"use strict";
exports.__esModule = true;
var connection = require("../db/connection");
exports.fetchSurgeries = function () {
    return connection.select('*').from('surgeries');
};
exports.addSurgery = function (newSurgery) {
    return connection.insert(newSurgery).into('surgeries').returning('*');
};
exports.fetchSurgeryByID = function (surgeryID) {
    return connection.select('*').groupBy('surgeries.surgery_id').from('surgeries').where('surgeries.surgery_id', '=', surgeryID).returning('*');
};
