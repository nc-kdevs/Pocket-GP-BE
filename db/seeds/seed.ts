const {
  patientsData, gpsData, ailmentsData, surgeryData,
} = require('../data/index.js');
const { encrypt } = require('../../security/encryption.js')
import Knex = require('knex');

exports.seed = (knex: Knex, Promise) => knex.migrate
  .rollback()
  .then(() => knex.migrate.latest())
  .then(() => {
    const encryptedSurgeryData = surgeryData.map((surgery: object) => encrypt(surgery))
    return knex('surgeries').insert(encryptedSurgeryData).returning('*')
  })
  .then(() => {
    const encryptedGpData = gpsData.map((gp: object) => encrypt(gp))
    return knex('gps').insert(encryptedGpData).returning('*')
  })
  .then(() => {
    const encryptedPatientData = patientsData.map((patient: object) => encrypt(patient))
    return knex('patients').insert(encryptedPatientData).returning('*')
  })
  .then(() => {
    const encryptedAilmentData = ailmentsData.map((ailment: object) => encrypt(ailment))
    return knex('ailments').insert(encryptedAilmentData).returning('*')
  }); 