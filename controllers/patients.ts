import {getUserAilments} from '../models/patients';
import {Request, Response, NextFunction} from 'express';

export const fetchUserAilments = (req: Request, res: Response, next: NextFunction) => {
    const {username} = req.params;
    getUserAilments(username)
        .then((ailments: object[]) => {
            return res.status(200).send({ailments})
        })
        .catch(next)
}