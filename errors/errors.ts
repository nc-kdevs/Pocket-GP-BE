import { Request, Response, NextFunction  } from 'express';

export const handle400 = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err)
  const { code } = err;
  const errorCodes400 = {
    23502: 'Invalid Request'
  };
  if (errorCodes400[code] || err.status === 400) {
    res.status(400).send({ message: errorCodes400[code] || err.msg });
  } else next(err);
};

export const handle404 = (err: any, req: Request, res: Response, next: NextFunction) => {
  const { code } = err;
  const errorCodes404 = {
  };
  if (errorCodes404[code] || err.status === 404) {
    res.status(404).send({ message: errorCodes404[code] || err.msg });
  } else next(err);
};

export const handle405 = (err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(405).send({ msg: 'Method Not Allowed' });
};

export const handle422 = (err: any, req: Request, res: Response, next: NextFunction) => {
  const { code } = err;
  const errorCodes422 = {
    23503: 'Unique Key Violation!. Request cannot be proccessed',
    23505: 'Unique Key Violation!. Request cannot be proccessed',
  };
  if (errorCodes422[code] || err.status === 422) {
    res.status(422).send({ message: errorCodes422[code] || err.msg });
  } else next(err);
};

export const handle500 = (err: any, req: Request, res: Response, next: NextFunction) => {
  const { code } = err;
  const errorCodes500 = {
    42703: 'Property does not Exist - Internal Server Error',
  };
  if (errorCodes500[code]) {
    res.status(500).send({ message: errorCodes500[code] });
  }
};
