import { fetchPatientByUsername, updatePatient, deletePatient, getPatients, addPatient, getUserAilments, createUserAilment } from '../models/patients.js';
import { Request, Response, NextFunction } from 'express';
import { encrypt, decrypt } from '../security/encryption.js'

export const getPatientByUsername = (req: Request, res: Response, next: NextFunction) => {
	const { username } = req.params
	const encryptedUsername = encrypt(req.params)
	console.log(encryptedUsername, 'THIS IS THE USERNAME')
	fetchPatientByUsername(encryptedUsername.username)
		.then(([patient]) => {
			const decryptedPatient = decrypt(patient)
			res.status(200).send({ patient: decryptedPatient })
		})
		.catch()
}

export const updatePatientByUsername = (req: Request, res: Response, next: NextFunction) => {
	const { username } = req.params;
	const { patient_username, patient_password, first_name, surname, telephone, email, address, surgery_id, emerg_contact, general_med } = req.body;
	const encryptedUsername = encrypt(req.params)
	const encryptedPatient = encrypt(req.body)
	console.log(encryptedPatient, 'enc patient')
	console.log(encryptedUsername, 'enc username')
	updatePatient(encryptedUsername.username, encryptedPatient)
		.then(([patient]) => {
			console.log(patient, 'PATIENT')
			const decryptedPatient = decrypt(patient)
			res.status(200).send({ patient: decryptedPatient });
		})
		.catch(next)
}

export const deletePatientByUsername = (req: Request, res: Response, next: NextFunction) => {
	const { username } = req.params;
	deletePatient(username)
		.then((output: number) => {
			if (output === 1) res.sendStatus(204);
			else next({ status: 404 })
		})
		.catch(next)
}

export const getAllPatients = (req: Request, res: Response, next: NextFunction) => {
	const { surgery_id } = req.query;
	getPatients({ surgery_id })
		.then(([patients]) => {
			res.status(200).send({ patients })
		})
		.catch(next)
}

export const postPatient = (req: Request, res: Response, next: NextFunction) => {
	const newPatient: object = req.body;
	addPatient(newPatient)
		.then(([patient]) => {
			return res.status(201).send({ patient })
		})
		.catch(next)
}

export const fetchUserAilments = (req: Request, res: Response, next: NextFunction) => {
	const { username } = req.params;
	getUserAilments(username)
		.then((ailments: object[]) => {
			return res.status(200).send({ ailments })
		})
		.catch(next)
}

export const postUserAilment = (req: Request, res: Response, next: NextFunction) => {
	const ailmentObj = req.body;
	const { username } = req.params;
	ailmentObj.patient_username = username
	createUserAilment(ailmentObj)
		.then(([ailment]) => {
			res.status(201).send({ ailment })
		})
		.catch(next)
}