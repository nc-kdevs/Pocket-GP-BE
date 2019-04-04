"use strict";
exports.__esModule = true;
var connection = require("../db/connection");
exports.getUserAilments = function (username) {
    return connection
        .select('*')
        .from('ailments')
        .where('patient_username', username);
};
