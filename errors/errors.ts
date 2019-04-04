import { Request, Response, NextFunction } from 'express';

export const handle400 = (err: any, req: Request, res: Response, next: NextFunction) => {
  const { code } = err;
  const errorCodes400 = {
    [code]: 'Invalid Request'
  };
  if (Object.keys(errorCodes400).includes('23502' || '42601' || '22P02')) {
    res.status(400).send({ message: errorCodes400[code] });
  } else next(err);
}

export const handle404 = (err: any, req: Request, res: Response, next: NextFunction) => {
  const { code } = err;
  const errorCodes404 = {
    [code]: 'Not Found'
  };
  if (Object.keys(errorCodes404).includes('22001' || 'ENOENT' || '42703')) {
    res.status(404).send({ message: errorCodes404[code] });
  } else next(err);
};

export const handle422 = (err: any, req: Request, res: Response, next: NextFunction) => {
  const { code } = err;
  const errorCodes422 = {
    [code]: 'Unique Key Violation!. Request cannot be proccessed',
  };
  if (Object.keys(errorCodes422).includes('23503' || '23503')) {
    res.status(422).send({ message: errorCodes422[code] });
  } else next(err);
};

export const handle500 = (err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(422).send({ message: 'Property does not Exist - Internal Server Error' });
};

export const handle405 = (err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(405).send({ msg: 'Method Not Allowed' });
};
