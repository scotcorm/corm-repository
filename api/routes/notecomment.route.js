import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import {
  createNoteComment,
  // deleteComment,
  // editComment,
  getNoteComments,
  // getcomments,
  likeNoteComment,
} from '../controllers/notecomment.controller.js';

const router = express.Router();

router.post('/createNoteComment', verifyToken, createNoteComment);
router.get('/getNoteComments/:noteId', getNoteComments);
router.put('/likeNoteComment/:notecommentId', verifyToken, likeNoteComment);
// router.put('/editComment/:commentId', verifyToken, editComment);
// router.delete('/deleteComment/:commentId', verifyToken, deleteComment);
// router.get('/getcomments', verifyToken, getcomments);

export default router;