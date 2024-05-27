import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import {
  createRecordComment,
  // deleteComment,
  editRecordComment,
  getRecordComments,
  // getcomments,
  likeRecordComment,
} from '../controllers/recordcomment.controller.js';

const router = express.Router();

router.post('/createRecordComment', verifyToken, createRecordComment);
router.get('/getRecordComments/:recordId', getRecordComments);
router.put(
  '/likeRecordComment/:recordcommentId',
  verifyToken,
  likeRecordComment
);
router.put(
  '/editRecordComment/:recordcommentId',
  verifyToken,
  editRecordComment
);
// router.delete('/deleteRecordComment/:commentId', verifyToken, deleteRecordComment);
// router.get('/getRecordcomments', verifyToken, getrecordcomments);

export default router;
