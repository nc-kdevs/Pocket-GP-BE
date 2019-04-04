import { fetchGps, addGp } from '../models/gps.js';
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

}

export const deleteGpByID = (req: Request, res: Response, next: NextFunction) => {

}