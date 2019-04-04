import * as connection from '../db/connection';

export const fetchPatientByUsername = (username:string) => {
	return connection.select('*').from('patients').where('patient_username',username);
}

export const updatePatient = (username:string,{patient_username,patient_password,first_name,surname,telephone,email,address,surgery_id,emerg_contact,general_med}) => {
	const updatePatientDetails: any = {};
	if(patient_username) updatePatientDetails.patient_username = patient_username;
	if(patient_password) updatePatientDetails.patient_password = patient_password;
	if(first_name) updatePatientDetails.first_name = first_name;
	if(surname) updatePatientDetails.surname = surname;
	if(telephone) updatePatientDetails.telephone = telephone;
	if(email) updatePatientDetails.email = email;
	if(address) updatePatientDetails.address = address;
	if(surgery_id) updatePatientDetails.surgery_id = surgery_id;
	if(emerg_contact) updatePatientDetails.emerg_contact = emerg_contact;
	if(general_med) updatePatientDetails.general_med = general_med;
	return connection('patients').where('patient_username',username).update(updatePatientDetails).returning('*')
}

export const deletePatient = (username:string) => {
	return connection.select('*').from('patients').where('patient_username',username).del()
}