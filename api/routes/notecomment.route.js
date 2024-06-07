import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import {
  createNoteComment,
  // deleteComment,
  //editNoteComment,
  getNoteComments,
  // getcomments,
  //likeNoteComment,
} from '../controllers/notecomment.controller.js';

const router = express.Router();

router.post('/create', verifyToken, createNoteComment);
router.get('/getNoteComments/:noteId', getNoteComments);
// router.put('/likeNoteComment/:notecommentId', verifyToken, likeNoteComment);
// router.put('/editNoteComment/:notecommentId', verifyToken, editNoteComment);
// router.delete('/deleteComment/:commentId', verifyToken, deleteComment);
// router.get('/getcomments', verifyToken, getcomments);

export default router;
