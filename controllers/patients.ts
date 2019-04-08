import { fetchPatientByUsername, updatePatient, deletePatient, getPatients, addPatient, getUserAilments, createUserAilment } from '../models/patients.js';
import { Request, Response, NextFunction } from 'express';
import { encrypt, decrypt } from '../security/encryption.js';

export const getPatientByUsername = (req: Request, res: Response, next: NextFunction) => {
	const { username } = req.params
	const encryptedUsername = encrypt(req.params)
	fetchPatientByUsername(encryptedUsername.username)
		.then(([patient]:[object]) => {
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
	updatePatient(encryptedUsername.username, encryptedPatient)
		.then(([patient]:[object]) => {
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
		.then(([patients]:[object[]]) => {
			const decryptedPatients = decrypt(patients)
			res.status(200).send({ patients: decryptedPatients })
		})
		.catch(next)
}

export const postPatient = (req: Request, res: Response, next: NextFunction) => {
	const newPatient: object = req.body;
	const encryptedPatient = encrypt(req.body)
	addPatient(encryptedPatient)
		.then(([patient]:[object]) => {
			const decryptedPatient = decrypt(patient)
			return res.status(201).send({ patient: decryptedPatient })
		})
		.catch(next)
}

export const fetchUserAilments = (req: Request, res: Response, next: NextFunction) => {
	const { username } = req.params;
	const encryptUsername = encrypt(req.params)
	getUserAilments(encryptUsername.username)
		.then((ailments: object[]) => {
			const decryptedAilment = ailments.map(ailment => decrypt(ailment))
			return res.status(200).send({ ailments: decryptedAilment })
		})
		.catch(next)
}

export const postUserAilment = (req: Request, res: Response, next: NextFunction) => {
	const ailmentObj = req.body;
	const { username } = req.params;
	const encryptedUsername = encrypt(req.params)
	const encryptedAilment = encrypt(req.body)
	encryptedAilment.patient_username = encryptedUsername.username
	createUserAilment(encryptedAilment)
		.then(([ailment]:[object]) => {
			const decryptedAilment = decrypt(ailment)
			res.status(201).send({ ailment: decryptedAilment })
		})
		.catch(next)
}