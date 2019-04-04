var _a = require('../data/index.js'), patientsData = _a.patientsData, gpsData = _a.gpsData, ailmentsData = _a.ailmentsData, surgeryData = _a.surgeryData;
exports.seed = function (knex, Promise) { return knex.migrate
    .rollback()
    .then(function () { return knex.migrate.latest(); })
    .then(function () {
        return knex('surgeries').insert(surgeryData).returning('*');
    })
    .then(function () {
        return knex('gps').insert(gpsData).returning('*');
    })
    .then(function () {
        return knex('patients').insert(patientsData).returning('*');
    })
    .then(function () {
        return knex('ailments').insert(ailmentsData).returning('*');
    }); };
