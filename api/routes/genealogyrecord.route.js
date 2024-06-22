import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import {
  creategenealogyrecord,
  deletegenealogyrecord,
  getgenealogyrecords,
  updategenealogyrecord,
} from '../controllers/genealogyrecord.controller.js';

const router = express.Router();

router.post('/creategenealogyrecord', verifyToken, creategenealogyrecord);
router.get('/getgenealogyrecords', getgenealogyrecords);
router.delete(
  '/deletegenealogyrecord/:genealogyrecordId/:userId',
  verifyToken,
  deletegenealogyrecord
);
router.put(
  '/updategenealogyrecord/:genealogyrecordId/:userId',
  verifyToken,
  updategenealogyrecord
);
//create routes then update the controller

export default router;
