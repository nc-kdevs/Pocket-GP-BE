import { fetchPatientByUsername, updatePatient, deletePatient, getPatients, addPatient, getUserAilments, createUserAilment, fetchImgData } from '../models/patients.js';
import { Request, Response, NextFunction } from 'express';
import { encrypt, decrypt } from '../security/encryption.js';
import { analyzeImg } from '../db/utils/imageRecog';

export const getPatientByUsername = (req: Request, res: Response, next: NextFunction) => {
	const { username } = req.params
	const encryptedUsername = encrypt(req.params)
	fetchPatientByUsername(encryptedUsername.username)
		.then(([patient]: [object]) => {
			const decryptedPatient = decrypt(patient)
			res.status(200).send({ patient: decryptedPatient })
		})
		.catch(console.log)
}

export const updatePatientByUsername = (req: Request, res: Response, next: NextFunction) => {
	const { username } = req.params;
	const { patient_username, patient_password, first_name, surname, telephone, email, address, surgery_id, emerg_contact, general_med } = req.body;
	const encryptedUsername = encrypt(req.params)
	const encryptedPatient = encrypt(req.body)
	updatePatient(encryptedUsername.username, encryptedPatient)
		.then(([patient]: [object]) => {
			const decryptedPatient = decrypt(patient)
			res.status(200).send({ patient: decryptedPatient });
		})
		.catch(console.log)
}

export const deletePatientByUsername = (req: Request, res: Response, next: NextFunction) => {
	const { username } = req.params;
	deletePatient(username)
		.then((output: number) => {
			if (output === 1) res.sendStatus(204);
			else next({ status: 404 })
		})
		.catch(console.log)
}

export const getAllPatients = (req: Request, res: Response, next: NextFunction) => {
	const { surgery_id } = req.query;
	getPatients({ surgery_id })
		.then(([patients]: [object[]]) => {
			const decryptedPatients = decrypt(patients)
			res.status(200).send({ patients: decryptedPatients })
		})
		.catch(console.log)
}

export const postPatient = (req: Request, res: Response, next: NextFunction) => {
	const newPatient: object = req.body;
	const encryptedPatient = encrypt(req.body)
	addPatient(encryptedPatient)
		.then(([patient]: [object]) => {
			const decryptedPatient = decrypt(patient)
			return res.status(201).send({ patient: decryptedPatient })
		})
		.catch(console.log)
}

export const fetchUserAilments = (req: Request, res: Response, next: NextFunction) => {
	const { username } = req.params;
	const encryptUsername = encrypt(req.params)
	getUserAilments(encryptUsername.username)
		.then((ailments: object[]) => {
			const decryptedAilment = ailments.map(ailment => decrypt(ailment))
			return res.status(200).send({ ailments: decryptedAilment })
		})
		.catch(console.log)
}

export const postUserAilment = (req: Request, res: Response, next: NextFunction) => {
	const ailmentObj = req.body;
	const { username } = req.params;
	const encryptedUsername = encrypt(req.params)
	const encryptedAilment = encrypt(req.body)
	encryptedAilment.patient_username = encryptedUsername.username
	createUserAilment(encryptedAilment)
		.then(([ailment]: [object]) => {
			const decryptedAilment = decrypt(ailment)
			res.status(201).send({ ailment: decryptedAilment })
		})
		.catch(console.log)
}

export const getImgData = (req: Request, res: Response, next: NextFunction) => {
	const { ailment_id } = req.params;
	fetchImgData(ailment_id)
		.then(([image]: [object]) => {
			const decryptedImg = decrypt(image);
			// if (decryptedImg) {
			const img = "https://upload.wikimedia.org/wikipedia/commons/8/8a/LGBT_Rainbow_Flag.png"
			analyzeImg(img)
			.then(analyzedData => {
				res.status(200).send({ imgData: analyzedData })
			})
			// }
		})
		.catch(console.log)
}