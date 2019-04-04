import { fetchGps } from '../models/gps.js';
import { Request, Response, NextFunction } from 'express';

export const getGps = (req: Request, res: Response, next: NextFunction) => {
  fetchGps()
    .then((gps: object[]) => {
      res.status(200).send({ gps })
    })
    .catch(next)
}