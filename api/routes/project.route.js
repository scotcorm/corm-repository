import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import {
  createproject,
  deleteproject,
  getprojects,
  updateproject,
} from '../controllers/project.controller.js';

const router = express.Router();

router.post('/createproject', verifyToken, createproject);
router.get('/getprojects', getprojects);
router.delete('/deleteproject/:projectId/:userId', verifyToken, deleteproject);
router.put('/updateproject/:projectId/:userId', verifyToken, updateproject);
//create routes then update the controller

export default router;
