import * as jwt from 'jsonwebtoken';
import env from '../utils';

export const generateToken = () =>
  jwt.sign({}, env!.ACCESS_TOKEN_SECRET, { expiresIn: '2m' });
