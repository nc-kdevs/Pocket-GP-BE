"use strict";
exports.__esModule = true;
var connection = require("../db/connection");
exports.fetchGps = function (conditions) {
    return connection
        .select('*')
        .from('gps')
        .where(conditions);
};
exports.addGp = function (gp) {
    return connection('gps')
        .insert(gp)
        .returning('*');
};
