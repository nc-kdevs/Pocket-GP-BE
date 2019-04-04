import * as connection from '../db/connection';

export const fetchGps = () => {
  return connection
    .select('*')
    .from('gps');
}
