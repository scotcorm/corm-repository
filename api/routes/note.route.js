import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import {
  create,
  deletenote,
  getnotes,
  // updatenote,
} from '../controllers/note.controller.js';

const router = express.Router();

router.post('/create', verifyToken, create);
router.get('/getnotes', getnotes);
router.delete('/deletenote/:noteId/:userId', verifyToken, deletenote);
// router.put('/updatenote/:noteId/:userId', verifyToken, updatenote);
// create routes then update the controller, then create state and function and modal on Dash page

export default router;
