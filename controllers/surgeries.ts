import { fetchSurgeries, addSurgery, fetchSurgeryByID } from '../models/surgeries.js';
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
    .catch(next)
}

export const getSurgeryByID = (req: Request, res: Response, next: NextFunction) => {
  const surgeryID: number = req.params.surgery_id;
  fetchSurgeryByID(surgeryID)
    .then((surgery: object) => {
      res.status(200).send({surgery})
    })
    .catch(next)
}