import * as connection from '../db/connection';

export const fetchSurgeries = () => {
  return connection.select('*').from('surgeries');
}