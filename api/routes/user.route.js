import express from 'express';
import {
  deleteUser,
  test,
  updateUser,
} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test', test);
router.put('/update/:userId', verifyToken, updateUser);
// create user route here and in controller
router.delete('/delete/:userId', verifyToken, deleteUser);

// if token is verified then user is added to the req (at verifyUser.js)then
// we go to the next function in user.route.js which is updateUser and there
// we will have access to the user token with req.user

export default router;
