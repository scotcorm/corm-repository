import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import {
  create,
  deletecitation,
  getcitations,
  // updatecitation,
} from '../controllers/citation.controller.js';

const router = express.Router();

router.post('/create', verifyToken, create);
router.get('/getcitations', getcitations);
// then create getcitations function in the controller

router.delete(
  '/deletecitation/:citationId/:userId',
  verifyToken,
  deletecitation
);
// router.put('/updatecitation/:citationId/:userId', verifyToken, updatecitation);
// and create deletecitation in the controller
// create routes then update the controller, then create state and function and modal on Dash page

export default router;
