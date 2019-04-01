const {
  patientData, gpData, ailmentData, surgeryData,
} = require('../data/index.js');

const seed = (knex: any, Promise: any) => knex.migrate
  .rollback()
  .then(() => knex.migrate.latest())

  .then(() => {
    const surgeries = knex('surgeries')
    .insert(surgeryData)
    const patients = knex('patients').insert(patientData).returning('*');
    const gps = knex('gps').insert(gpData).returning('*')
    return Promise.all([surgeries,patients, gps])
  })
  .then(([patients, gps]) => {
    console.log(patients, '<-- patients')
    console.log(gps, '<-- GPs')
    // const ailments = knex('ailments').insert
    // (ailmentData).returning('*')
  })

