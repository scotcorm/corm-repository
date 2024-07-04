import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

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
    res.json('Signup successful');
  } catch (error) {
    next(error);
  }
};

// add signin to auth controller and auth route
export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === '' || password === '') {
    // use the site's utils/middleware errorHandler
    next(errorHandler(400, 'All fields are required'));
  }

  try {
    // search the user's email in database
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, 'Not found'));
    }
    // bcrypt method compareSync
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, 'Not valid'));
    }
    const token = jwt.sign(
      // by searching the email we get the _id from mongoDB and save the info
      { id: validUser._id, isAdmin: validUser.isAdmin },
      // add secret key to .env
      process.env.JWT_SECRET,
      { expiresIn: '4h' }
    );
    // remove the hashed password from the database record
    const { password: pass, ...rest } = validUser._doc;

    res
      .status(200)
      .cookie('access_token', token, {
        httpOnly: true,
      })
      //.json(validUser); instead of sending the validUser send the rest back (see prior const)
      .json(rest);
  } catch (error) {
    // use the site middleware to send error
    next(error);
  }
};

export const google = async (req, res, next) => {
  const { email, name, googlePhotoUrl } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const token = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.JWT_SECRET
      );
      const { password, ...rest } = user._doc;
      res
        .status(200)
        .cookie('access_token', token, {
          httpOnly: true,
        })
        .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        username:
          name.toLowerCase().split(' ').join('') +
          Math.random().toString(9).slice(-4),
        email,
        password: hashedPassword,
        profilePicture: googlePhotoUrl,
      });
      await newUser.save();
      const token = jwt.sign(
        { id: newUser._id, isAdmin: newUser.isAdmin },
        process.env.JWT_SECRET
      );
      const { password, ...rest } = newUser._doc;
      res
        .status(200)
        .cookie('access_token', token, {
          httpOnly: true,
        })
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};
