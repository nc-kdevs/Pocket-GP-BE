import { Request, Response, NextFunction } from 'express';
import { fetchAilment, updateAilment, deleteAilment } from '../models/ailments';
import { encrypt, decrypt } from '../security/encryption.js'

export const getAilmentData = (req: Request, res: Response, next: NextFunction) => {
  const { ailment_id } = req.params;
  fetchAilment(ailment_id)
    .then(([ailment]) => {
      const decryptedAilment = decrypt(ailment)
      res.status(200).send({ ailment: decryptedAilment });
    })
    .catch(next);
}

export const patchAilmentData = (req: Request, res: Response, next: NextFunction) => {
  const { ailment_id } = req.params;
  const { ailment_type, ailment_name, ailment_description, image, prescription, treatment_plan } = req.body;
  const encryptedAilment = encrypt(req.body)
  updateAilment(ailment_id, encryptedAilment)
    .then(([ailment]) => {
      const decryptedAilment = decrypt(ailment)
      res.status(200).send({ ailment: decryptedAilment });
    })
    .catch(next);
}

export const deleteAilmentData = (req: Request, res: Response, next: NextFunction) => {
  const { ailment_id } = req.params;
  deleteAilment(ailment_id)
    .then((output: number) => {
      if (output === 1) res.sendStatus(204);
      else next({ status: 404 })
    })
    .catch(next);
}