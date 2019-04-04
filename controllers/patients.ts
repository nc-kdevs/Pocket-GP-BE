import {fetchPatientByUsername} from '../models/patients.js';
import {Request, Response, NextFunction} from 'express';

export const getAllPatientsByUsername = (req: Request, res: Response, next: NextFunction) => {
	const {username} = req.params
	fetchPatientByUsername(username)
	.then(([patient]) => {
		res.status(200).send({patient})
	})
	.catch()
}