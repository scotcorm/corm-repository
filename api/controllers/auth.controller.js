import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === '' ||
    email === '' ||
    password === ''
  ) {
    next(errorHandler(400, 'All fields are required'));
  }
  // add the password which we are getting from above in req.body with 10 salt
  const hashedPassword = bcryptjs.hashSync(password, 10);
  //refers to User in user.model.js
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    //then save the new user
    await newUser.save();
    res.json('signup successful');
  } catch (error) {
    next(error);
  }
};
