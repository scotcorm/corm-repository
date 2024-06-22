import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import {
  createGenealogyrecordComment,
  deleteGenealogyrecordComment,
  editGenealogyrecordComment,
  getGenealogyrecordComments,
  getallgenealogyrecordcomments,
  likeGenealogyrecordComment,
} from '../controllers/genealogyrecordcomment.controller.js';

const router = express.Router();

router.post(
  '/createGenealogyrecordComment',
  verifyToken,
  createGenealogyrecordComment
);
router.get(
  '/getGenealogyrecordComments/:genealogyrecordId',
  getGenealogyrecordComments
);
router.put(
  '/likeGenealogyrecordComment/:genealogyrecordcommentId',
  verifyToken,
  likeGenealogyrecordComment
);
router.put(
  '/editGenealogyrecordComment/:genealogyrecordcommentId',
  verifyToken,
  editGenealogyrecordComment
);
router.delete(
  '/deleteGenealogyrecordComment/:commentId',
  verifyToken,
  deleteGenealogyrecordComment
);
router.get(
  '/getallgenealogyrecordcomments',
  verifyToken,
  getallgenealogyrecordcomments
);

export default router;
