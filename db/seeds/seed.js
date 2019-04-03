"use strict";
exports.__esModule = true;
var _a = require('../data/index.js'), patientData = _a.patientData, gpData = _a.gpData, ailmentData = _a.ailmentData, surgeryData = _a.surgeryData;
var utils_1 = require("../utils/utils");
exports.seed = function (knex, Promise) {
    return knex.migrate
        .rollback()
        .then(function () { return knex.migrate.latest(); })
        .then(function () {
            return knex('surgeries').insert(surgeryData).returning('*');
        })
        .then(function (surgeries) {
            // console.log(surgeries, '<-- surgeries')
            var formattedGpData = utils_1.formatGpData(gpData);
            console.log(formattedGpData);
            return knex('patients').insert(formattedGpData).returning('*');
        })
        .then(console.log);
};
// .then((gps) => {
//   console.log(gps, '<--gps')
//   return knex('ailments').insert(ailmentData).returning('*')
// })
// .then((ailments) => {
//   console.log(ailments, '<-- ailments')
// })
