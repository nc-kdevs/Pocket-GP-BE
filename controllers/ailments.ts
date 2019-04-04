import { Request, Response, NextFunction } from 'express';
import { fetchAilment } from '../models/ailments';

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
}