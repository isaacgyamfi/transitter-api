import { sign, verify } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { GetUserAuthInfoRequest } from '../helpers/definitionfile';

const verifyToken = (req: GetUserAuthInfoRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  // if (!token) res.status(404).json({ message: 'User not authenticated!' });

  if (typeof token === 'string') {
    verify(token, 'dummy-secrete', (err: any, user: any) => {
      console.log(err);
      if (err) return res.status(403);
      req.user = user;
      next();
    });
  }
};

export const generateToken = (publisher: any) => {
  const token = sign({ publisherId: publisher.id, email: publisher.email }, 'dummy-secrete', { expiresIn: '2h' });

  return token;
};
