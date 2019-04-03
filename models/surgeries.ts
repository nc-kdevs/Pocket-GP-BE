import * as connection from '../db/connection';

export const fetchSurgeries = () => {
  return connection.select('*').from('surgeries');
}

export const addSurgery = (newSurgery: object) => {
  return connection.insert(newSurgery).into('surgeries').returning('*')
}