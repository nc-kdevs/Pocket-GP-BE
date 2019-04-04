import {fetchPatientByUsername, updatePatient} from '../models/patients.js';
import {Request, Response, NextFunction} from 'express';

export const getAllPatientsByUsername = (req: Request, res: Response, next: NextFunction) => {
	const {username} = req.params
	fetchPatientByUsername(username)
	.then(([patient]) => {
		res.status(200).send({patient})
	})
	.catch()
}

export const updatePatientByUsername = (req: Request, res: Response, next: NextFunction) => {
	const {username} = req.params;
	const {patient_username,patient_password,first_name,surname,telephone,email,address,surgery_id,emerg_contact,general_med} = req.body;
	updatePatient(username, req.body)
	.then(([patient]) => {
		res.status(200).send({patient});
	})
	.catch(next)
}