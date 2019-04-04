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

export const updateSurgery = (surgery_id: number, {surgery_name, surgery_address}) => {
  const updateObj: any = {};
  if (surgery_name) updateObj.surgery_name = surgery_name;
  if (surgery_address) updateObj.surgery_address = surgery_address;
  return connection.select('*').from('surgeries').where({ surgery_id }).update(updateObj).returning('*')
}
