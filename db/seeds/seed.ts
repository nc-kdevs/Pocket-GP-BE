const {
  patientData, gpData, ailmentData, surgeryData,
} = require('../data/index.js');
import { formatGpData } from '../utils/utils';

exports.seed = (knex, Promise) => knex.migrate
  .rollback()
  .then(() => knex.migrate.latest())
  .then(() => {
    return knex('surgeries').insert(surgeryData).returning('*')
  })
  .then((surgeries) => {
    // console.log(surgeries, '<-- surgeries')
    const formattedGpData = formatGpData(gpData);
    console.log(formattedGpData)
    return knex('patients').insert(formattedGpData).returning('*')
  })
  .then(console.log)
  // .then((gps) => {
  //   console.log(gps, '<--gps')
  //   return knex('ailments').insert(ailmentData).returning('*')
  // })
  // .then((ailments) => {
  //   console.log(ailments, '<-- ailments')
  // })



