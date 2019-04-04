import * as connection from '../db/connection';

export const fetchPatientByUsername = (username:string) => {
	return connection.select('*').from('patients').where('patient_username',username);
}