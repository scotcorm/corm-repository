import express from 'express';
import { signin, signup } from '../controllers/auth.controller.js';

const router = express.Router();

// add these to auth controller and auth route
router.post('/signup', signup);
router.post('/signin', signin);

export default router;
