import { fetchSurgeries, addSurgery, fetchSurgeryByID, editSurgery } from '../models/surgeries.js';
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

export const patchSurgeryByID = (req: Request, res: Response, next: NextFunction) => {
  const surgeryID: number = req.params.surgery_id;
  const surgeryPatch: string = req.body
  editSurgery(surgeryID, surgeryPatch)
    .then((surgery: object) => {
      res.status(200).send({surgery})
    })
    .catch(next)
}

// exports.sendPatchedArticle = (req, res, next) => {
//   const { article_id } = req.params;
//   const { inc_votes } = req.body;

//   patchArticleByID(article_id, inc_votes)
//     .then(([article]) => {
//       if (typeof inc_votes !== 'number') {
//         return Promise.reject({
//           status: 400,
//           message: 'Malformed syntax, check you have entered a Number',
//         });
//       }
//       res.status(200).send({ article });
//     })
//     .catch(err => next(err));
// };