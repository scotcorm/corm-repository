import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import {
  createComment,
  deleteComment,
  editComment,
  getCitationComments,
  // getcomments,
  likeComment,
} from '../controllers/comment.controller.js';

const router = express.Router();

// create models/routes/then the functions below in the controllers/then add the route to index.js and the api there too (import it)

router.post('/create', verifyToken, createComment);
router.get('/getCitationComments/:citationId', getCitationComments);
router.put('/likeComment/:commentId', verifyToken, likeComment);
router.put('/editComment/:commentId', verifyToken, editComment);
router.delete('/deleteComment/:commentId', verifyToken, deleteComment);
// router.get('/getcomments', verifyToken, getcomments);

export default router;
