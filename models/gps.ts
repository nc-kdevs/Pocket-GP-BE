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

export const fetchGpById = (gp_id: Number) => {
  return connection
    .select('*')
    .from('gps')
    .where('gp_id', gp_id)
}

export const removeGp = (gp_id: Number) => {
  return connection('gps')
    .del()
    .where('gp_id', gp_id);
}
