const {
  patientData, gpData, ailmentData, surgeryData,
} = require('../data/index.js');

exports.seed = (knex, Promise) => knex.migrate
  .rollback()
  .then(() => knex.migrate.latest())
  .then(() => {
    return knex('surgeries').insert(surgeryData).returning('*')
  })
  .then((surgeries) => {
    console.log(surgeries, '<-- surgeries')
    return knex('patients').insert(patientData).returning('*')
  })
  .then((gps) => {
    console.log(gps, '<--gps')
    return knex('ailments').insert(ailmentData).returning('*')
  })
  .then((ailments) => {
    console.log(ailments, '<-- ailments')
  })



