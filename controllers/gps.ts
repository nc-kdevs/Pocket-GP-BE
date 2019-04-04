import { fetchGps, addGp, fetchGpById, removeGp } from '../models/gps.js';
import { Request, Response, NextFunction } from 'express';

export const getGps = (req: Request, res: Response, next: NextFunction) => {
  const { surgery } = req.query;
  const conditions: any = {};
  if (surgery) conditions['gps.surgery_id'] = surgery;
  fetchGps(conditions)
    .then((gps: object[]) => {
      res.status(200).send({ gps })
    })
    .catch(next)
}

export const postGp = (req: Request, res: Response, next: NextFunction) => {
  const gp: object = req.body;
  addGp(gp)
    .then(([newGp]) => {
      console.log(newGp)
      res.status(201).send({ gp: newGp })
    })
    .catch(next)
}

export const getGpByID = (req: Request, res: Response, next: NextFunction) => {
  const { gp_id } = req.params;
  fetchGpById(gp_id)
    .then(([gp]) => {
      console.log(gp)
      if (!gp) return Promise.reject({ code: '22001' });
      return res.status(200).send({ gp });
    })
    .catch(next);
}

export const deleteGpByID = (req: Request, res: Response, next: NextFunction) => {
  const { gp_id } = req.params;
  removeGp(gp_id)
    .then((deletedGp) => {
      if (deletedGp === 1) res.sendStatus(204);
      else res.status(404).send({ status: 404, msg: 'Not found' });
    })
    .catch(next);
}
