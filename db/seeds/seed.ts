const {
  patientsData, gpsData, ailmentsData, surgeryData,
} = require('../data/index.js');

exports.seed = (knex, Promise) => knex.migrate
  .rollback()
  .then(() => knex.migrate.latest())
  .then(() => {
    return knex('surgeries').insert(surgeryData).returning('*')
  })
  .then(() => {
    return knex('gps').insert(gpsData).returning('*')
  })
  .then(() => {
    return knex('patients').insert(patientsData).returning('*')
  })
  .then(() => {
    return knex('ailments').insert(ailmentsData).returning('*')
  })
  .then(console.log)