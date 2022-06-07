import express from "express";
import auth from "../middleware/auth";
import {
  showProfile,
  showPurchaseHistory,
  showPurchases,
  addPurchase,
  updatePurchase,
  deletePurchase,
} from "../controllers/purchase.js";

const router = express.Router();

router.get("/", showProfile);

router.get("/history", showPurchaseHistory);

router.get("/manage", showPurchases);

router.post("/manage", addPurchase);

router.put("/manage/:id", updatePurchase);

router.delete("/manage/:id", deletePurchase);

export default router;
