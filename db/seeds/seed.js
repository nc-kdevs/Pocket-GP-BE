var _a = require('../data/index.js'), patientData = _a.patientData, gpData = _a.gpData, ailmentData = _a.ailmentData, surgeryData = _a.surgeryData;
var seed = function (knex, Promise) { return knex.migrate
    .rollback()
    .then(function () { return knex.migrate.latest(); })
    .then(function () {
    var surgeries = knex('surgeries')
        .insert(surgeryData);
    var patients = knex('patients').insert(patientData).returning('*');
    var gps = knex('gps').insert(gpData).returning('*');
    return Promise.all([surgeries, patients, gps]);
})
    .then(function (_a) {
    var patients = _a[0], gps = _a[1];
    console.log(patients, '<-- patients');
    console.log(gps, '<-- GPs');
    // const ailments = knex('ailments').insert
    // (ailmentData).returning('*')
}); };
