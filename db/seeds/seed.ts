const {
  patientData, gpData, ailmentData, surgeryData,
} = require('../data/index.js');

const seed = (knex: any, Promise: any) => knex.migrate
  .rollback()
  .then(() => knex.migrate.latest())
  .then(() => {
    return knex('surgeries')
      .insert(surgeryData)
      .returning('*')
  })
  .then(() => {
    const patients = knex('patients').insert(patientData).returning('*');
    const gps = knex('gps').insert(gpData).returning('*')
    return Promise.all([patients, gps])
  })
  .then(([patients, gps]) => {
    console.log(patients)
  })

