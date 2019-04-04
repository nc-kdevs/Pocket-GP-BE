import {fetchPatientByUsername, updatePatient, deletePatient, getPatients} from '../models/patients.js';
import {Request, Response, NextFunction} from 'express';

export const getPatientByUsername = (req: Request, res: Response, next: NextFunction) => {
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

export const deletePatientByUsername = (req: Request, res: Response, next: NextFunction) => {
	const {username} = req.params;
	deletePatient(username)
	.then((output: number) => {
		if (output === 1) res.sendStatus(204);
		else next({ status: 404 })
	})
	.catch(next)
}

export const getAllPatients = (req: Request, res: Response, next: NextFunction) => {
	const {surgery_id} = req.query;
	getPatients({surgery_id}) 
	.then(([patients]) => {
		res.status(200).send({patients})
	})
	.catch(next)
}