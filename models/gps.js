"use strict";
exports.__esModule = true;
var connection = require("../db/connection");
exports.fetchGps = function () {
    return connection
        .select('*')
        .from('gps');
};
