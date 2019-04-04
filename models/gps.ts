import * as connection from '../db/connection';

export const fetchGps = (conditions: object) => {
  return connection
    .select('*')
    .from('gps')
    .where(conditions)
}

export const addGp = (gp: object) => {
  return connection('gps')
    .insert(gp)
    .returning('*');
}
