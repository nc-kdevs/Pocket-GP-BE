import * as connection from '../db/connection';

export const fetchAilment = (ailment_id: number) => {
  return connection.select('*').from('ailments').where({ ailment_id });
}