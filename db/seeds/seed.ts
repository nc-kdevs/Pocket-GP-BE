const {
  patientsData, gpsData, ailmentsData, surgeryData,
} = require('../data/index.js');
const {encrypt} = require('../../security/encryption.js')

exports.seed = (knex, Promise) => knex.migrate
  .rollback()
  .then(() => knex.migrate.latest())
  .then(() => {
    const encryptedSurgeryData = surgeryData.map(surgery => encrypt(surgery))
    return knex('surgeries').insert(encryptedSurgeryData).returning('*')
  })
  .then(() => {
    const encryptedGpData = gpsData.map(gp => encrypt(gp))
    return knex('gps').insert(encryptedGpData).returning('*')
  })
  .then(() => {
    const encryptedPatientData = patientsData.map(patient => encrypt(patient))
    return knex('patients').insert(encryptedPatientData).returning('*')
  })
  .then(() => {
    const encryptedAilmentData = ailmentsData.map(ailment => encrypt(ailment))
    return knex('ailments').insert(encryptedAilmentData).returning('*')
  }); 