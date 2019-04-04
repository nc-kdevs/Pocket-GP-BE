import { Request, Response, NextFunction } from 'express';
import { fetchAilment, updateAilment, deleteAilment } from '../models/ailments';

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

export const deleteAilmentData = (req: Request, res: Response, next: NextFunction) => {
  const { ailment_id } = req.params;
  deleteAilment(ailment_id)
    .then((output: number) => {
      console.log(output)
      if (output === 1) res.sendStatus(204);
      else next({ status: 404 })
    })
    .catch(next);
}