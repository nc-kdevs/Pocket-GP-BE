var _a = require('../data/index.js'), patientData = _a.patientData, gpData = _a.gpData, ailmentData = _a.ailmentData, surgeryData = _a.surgeryData;
exports.seed = function (knex, Promise) { return knex.migrate
    .rollback()
    .then(function () { return knex.migrate.latest(); })
    .then(function () {
    return knex('surgeries').insert(surgeryData).returning('*');
})
    .then(function (surgeries) {
    console.log(surgeries, '<-- surgeries');
    return knex('patients').insert(patientData).returning('*');
})
    .then(function (gps) {
    console.log(gps, '<--gps');
    return knex('ailments').insert(ailmentData).returning('*');
})
    .then(function (ailments) {
    console.log(ailments, '<-- ailments');
}); };
