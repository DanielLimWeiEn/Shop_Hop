import express from "express";
import { getPayments, payPayments } from '../controllers/payments.js';

const router = express.Router();

router.get('/', getPayments);

router.post('/pay', payPayments);

export default router;