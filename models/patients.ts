import * as connection from '../db/connection';

export const getUserAilments = (username: object) => {
    return connection
        .select('*')
        .from('ailments')
        .where('patient_username', username)
}