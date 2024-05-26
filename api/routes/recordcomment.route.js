import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import {
  createRecordComment,
  // deleteComment,
  // editComment,
  getRecordComments,
  // getcomments,
  likeRecordComment,
} from '../controllers/recordcomment.controller.js';

const router = express.Router();

router.post('/createRecordComment', verifyToken, createRecordComment);
router.get('/getRecordComments/:recordId', getRecordComments);
router.put('/likeRecordComment/:recordId', verifyToken, likeRecordComment);
// router.put('/editComment/:commentId', verifyToken, editComment);
// router.delete('/deleteComment/:commentId', verifyToken, deleteComment);
// router.get('/getcomments', verifyToken, getcomments);

export default router;
