import { fetchSurgeries, addSurgery } from '../models/surgeries.js';
import { Request, Response, NextFunction } from 'express';

export const getSurgeries = (req: Request, res: Response, next: NextFunction) => {
  fetchSurgeries()
    .then((surgeries: object[]) => {
      res.status(200).send({ surgeries })
    })
    .catch(next)
}

export const postSurgery = (req: Request, res: Response, next: NextFunction) => {
  const newSurgery: object = req.body;
  addSurgery(newSurgery)
    .then(([surgery]) => {
      return res.status(201).send({surgery})
    })
    .catch(console.log)
}