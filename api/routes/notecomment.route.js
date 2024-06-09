import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import {
  createNoteComment,
  deleteNoteComment,
  editNoteComment,
  getNoteComments,
  getallnotecomments,
  likeNoteComment,
} from '../controllers/notecomment.controller.js';

const router = express.Router();

router.post('/createNoteComment', verifyToken, createNoteComment);
router.get('/getNoteComments/:noteId', getNoteComments);
router.put('/likeNoteComment/:notecommentId', verifyToken, likeNoteComment);
router.put('/editNoteComment/:notecommentId', verifyToken, editNoteComment);
router.delete('/deleteNoteComment/:commentId', verifyToken, deleteNoteComment);
router.get('/getallnotecomments', verifyToken, getallnotecomments);

export default router;
