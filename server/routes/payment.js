import express from "express";
import { getPayments, payPayments } from "../controllers/payments.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, getPayments);

router.post("/pay", auth, payPayments);

export default router;
