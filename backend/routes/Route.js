import express from 'express';
import EmailController from '../controllers/Controller.js';
const router = express.Router()
router.post('/sendemail',EmailController)
export default router;