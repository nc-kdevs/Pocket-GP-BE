import { fetchSurgeries, addSurgery, fetchSurgeryByID, updateSurgery, deleteSurgery } from '../models/surgeries.js';
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
  const surgery_id: number = req.params.surgery_id;
  fetchSurgeryByID(surgery_id)
    .then((surgery: object[]) => {
      res.status(200).send({surgery})
    })
    .catch(next)
}

export const patchSurgeryByID = (req: Request, res: Response, next: NextFunction) => {
  const surgery_id: number = req.params.surgery_id;
  const {surgery_name, surgery_address} = req.body;
  updateSurgery(surgery_id, req.body)
    .then(([surgery]) => {
      res.status(200).send({surgery})
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
