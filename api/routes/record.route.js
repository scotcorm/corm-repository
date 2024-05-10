import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import {
  create,
  deleterecord,
  getrecords,
  updaterecord,
} from '../controllers/record.controller.js';

const router = express.Router();

router.post('/create', verifyToken, create);
router.get('/getrecords', getrecords);
router.delete('/deleterecord/:recordId/:userId', verifyToken, deleterecord);
router.put('/updaterecord/:recordId/:userId', verifyToken, updaterecord);

export default router;
