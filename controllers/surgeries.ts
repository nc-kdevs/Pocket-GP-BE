import { fetchSurgeries, addSurgery, fetchSurgeryByID, updateSurgery, deleteSurgery } from '../models/surgeries.js';
import { Request, Response, NextFunction } from 'express';
import { encrypt, decrypt } from '../security/encryption.js';

export const getSurgeries = (req: Request, res: Response, next: NextFunction) => {
  fetchSurgeries()
    .then((surgeries: object[]) => {
      const decryptedSurgeries = surgeries.map(surgery => decrypt(surgery))
      res.status(200).send({ surgeries: decryptedSurgeries })
    })
    .catch(next)
}

export const postSurgery = (req: Request, res: Response, next: NextFunction) => {
  const newSurgery: object = req.body;
  const encryptedSurgery = encrypt(req.body)
  addSurgery(encryptedSurgery)
    .then(([surgery]:[object]) => {
      const decryptedSurgery = decrypt(surgery)
      return res.status(201).send({surgery: decryptedSurgery})
    })
    .catch(next)
}

export const getSurgeryByID = (req: Request, res: Response, next: NextFunction) => {
  const surgery_id: number = req.params.surgery_id;
  fetchSurgeryByID(surgery_id)
    .then(([surgery]:[object]) => {
      const decryptedSurgery = decrypt(surgery)
      res.status(200).send({surgery: decryptedSurgery})
    })
    .catch(next)
}

export const patchSurgeryByID = (req: Request, res: Response, next: NextFunction) => {
  const surgery_id: number = req.params.surgery_id;
  const {surgery_name, surgery_address} = req.body;
  const encryptedSurgery = encrypt(req.body)
  updateSurgery(surgery_id, encryptedSurgery)
    .then(([surgery]:[object]) => {
      const decryptedSurgery = decrypt(surgery)
      res.status(200).send({surgery: decryptedSurgery})
    })
    .catch(next)
}

export const deleteSurgeryByID = (req: Request, res: Response, next: NextFunction) => {
  const surgery_id: number = req.params.surgery_id;
  deleteSurgery(surgery_id)
    .then(() => {
      res.sendStatus(204)
    })
    .catch(next)
};
