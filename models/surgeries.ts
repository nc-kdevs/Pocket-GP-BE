import * as connection from '../db/connection';

export const fetchSurgeries = () => {
  return connection.select('*').from('surgeries');
}

export const addSurgery = (newSurgery: object) => {
  return connection.insert(newSurgery).into('surgeries').returning('*')
}

export const fetchSurgeryByID = (surgeryID: number) => {
  return connection.select('*').groupBy('surgeries.surgery_id').from('surgeries').where('surgeries.surgery_id', '=', surgeryID).returning('*')
}
