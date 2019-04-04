import { Request, Response, NextFunction } from 'express';
import { fetchAilment, updateAilment } from '../models/ailments';

export const getAilmentData = (req: Request, res: Response, next: NextFunction) => {
  const { ailment_id } = req.params;
  fetchAilment(ailment_id)
    .then(([ailment]) => {
      res.status(200).send({ ailment });
    })
    .catch(next);
}

export const patchAilmentData = (req: Request, res: Response, next: NextFunction) => {
  const { ailment_id } = req.params;
  const { ailment_type, ailment_name, ailment_description, image, prescription, treatment_plan } = req.body;
  updateAilment(ailment_id, req.body)
    .then(([ailment]) => {
      console.log(ailment)
      res.status(200).send({ ailment });
    })
    .catch(next);
}