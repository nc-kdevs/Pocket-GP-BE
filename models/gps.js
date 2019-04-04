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
exports.fetchGpById = function (gp_id) {
    return connection
        .select('*')
        .from('gps')
        .where('gp_id', gp_id);
};
exports.removeGp = function (gp_id) {
    return connection('gps')
        .del()
        .where('gp_id', gp_id);
};
