import { fetchGps } from '../models/gps.js';
import { Request, Response, NextFunction } from 'express';

export const getGps = (req: Request, res: Response, next: NextFunction) => {
  const { surgery } = req.query;
  const conditions: any = {};
  if (surgery) conditions['gps.surgery_id'] = surgery;
  fetchGps(conditions)
    .then((gps: object[]) => {
      console.log(gps)
      res.status(200).send({ gps })
    })
    .catch(next)
}

export const postGp = (req: Request, res: Response, next: NextFunction) => {

}

export const getGpByID = (req: Request, res: Response, next: NextFunction) => {

}

export const deleteGpByID = (req: Request, res: Response, next: NextFunction) => {

}