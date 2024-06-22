import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import {
  createProjectComment,
  deleteProjectComment,
  editProjectComment,
  getProjectComments,
  getallprojectcomments,
  likeProjectComment,
} from '../controllers/projectcomment.controller.js';

const router = express.Router();

router.post('/createProjectComment', verifyToken, createProjectComment);
router.get('/getProjectComments/:projectId', getProjectComments);
router.put(
  '/likeProjectComment/:projectcommentId',
  verifyToken,
  likeProjectComment
);
router.put(
  '/editProjectComment/:projectcommentId',
  verifyToken,
  editProjectComment
);
router.delete(
  '/deleteProjectComment/:commentId',
  verifyToken,
  deleteProjectComment
);
router.get('/getallprojectcomments', verifyToken, getallprojectcomments);

export default router;
