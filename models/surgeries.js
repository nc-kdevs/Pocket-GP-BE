"use strict";
exports.__esModule = true;
var connection = require("../db/connection");
exports.fetchSurgeries = function () {
    return connection.select('*').from('surgeries');
};
exports.addSurgery = function (newSurgery) {
    return connection.insert(newSurgery).into('surgeries').returning('*');
};
