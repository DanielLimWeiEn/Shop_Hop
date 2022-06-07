import express from "express";
import auth from "../middleware/auth.js";
import {
  showProfile,
  showPurchaseHistory,
  showPurchases,
  addPurchase,
  updatePurchase,
  deletePurchase,
} from "../controllers/purchase.js";

const router = express.Router();

router.get("/", auth, showProfile);

router.get("/history", auth, showPurchaseHistory);

router.get("/manage", auth, showPurchases);

router.post("/manage", auth, addPurchase);

router.put("/manage/:id", auth, updatePurchase);

router.delete("/manage/:id", auth, deletePurchase);

export default router;
