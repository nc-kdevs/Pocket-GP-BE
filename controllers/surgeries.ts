import { fetchSurgeries, addSurgery, fetchSurgeryByID, updateSurgery } from '../models/surgeries.js';
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
    .then((surgery) => {
      return res.status(201).send({surgery})
    })
    .catch(next)
}

export const getSurgeryByID = (req: Request, res: Response, next: NextFunction) => {
  const surgeryID: number = req.params.surgery_id;
  fetchSurgeryByID(surgeryID)
    .then(([surgery]) => {
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

// export const patchAilmentData = (req: Request, res: Response, next: NextFunction) => {
//   const { ailment_id } = req.params;
//   const { ailment_type, ailment_name, ailment_description, image, prescription, treatment_plan } = req.body;
//   updateAilment(ailment_id, req.body)
//     .then(([ailment]) => {
//       console.log(ailment)
//       res.status(200).send({ ailment });
//     })
//     .catch(next);
// }