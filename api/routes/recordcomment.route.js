import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import {
  createRecordComment,
  deleteRecordComment,
  editRecordComment,
  getRecordComments,
  likeRecordComment,
} from '../controllers/recordcomment.controller.js';
//import {
//createRecordComment,
// deleteComment,
//editRecordComment,
//getRecordComments,
// getcomments,
////likeRecordComment,
//} from '../controllers/recordcomment.controller.js';

const router = express.Router();

router.post('/create', verifyToken, createRecordComment);

// router.post('/createRecordComment', verifyToken, createRecordComment);
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
// first create route, then function in controller then import at top, then once route is done add to frontend ==============

router.delete(
  '/deleteRecordComment/:recordcommentId',
  verifyToken,
  deleteRecordComment
);
// router.get('/getRecordcomments', verifyToken, getrecordcomments);

export default router;
