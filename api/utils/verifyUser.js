import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';
// pull cookie name access_token from auth.controller.js
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(errorHandler(401, 'Unauthorized'));
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(errorHandler(401, 'Unauthorized'));
    }
    req.user = user;
    // go to update user function
    next();
  });
};
