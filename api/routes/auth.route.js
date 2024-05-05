import express from 'express';
import { google, signin, signup } from '../controllers/auth.controller.js';

const router = express.Router();

// add these to auth controller and auth route
router.post('/signup', signup);
router.post('/signin', signin);
router.post('/google', google);

export default router;
