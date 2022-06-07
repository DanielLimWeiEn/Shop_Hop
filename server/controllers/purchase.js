import mongoose from "mongoose";

import Purchases from "../models/purchases.js";
import User from "../models/user.js";

// @desc Display user profile page.
// @route GET /profile/
// @access private
export const showProfile = async (req, res) => {
  try {
    res.status(200).json({ message: "This is working" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// @desc Show user purchase history for history page.
// @route GET /profile/history
// @access private
export const showPurchaseHistory = async (req, res) => {
  try {
    const purchases = await Purchases.find({ user: req.userId });
    res.status(200).json({ purchases });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// @desc Display user purchases for management page.
// @route GET /profile/manage
// @access private
export const showPurchases = async (req, res) => {
  try {
    const purchases = await Purchases.find({ user: req.userId });
    res.status(200).json({ purchases });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// @desc Add a new to user for the management page.
// @route POST /profile/manage
// @access private
export const addPurchase = async (req, res) => {
  const purchase = req.body;

  const newPurchase = new Purchases({
    ...purchase,
    user: req.userId,
    purchaseDate: new Date().toISOString(),
  });
  try {
    newPurchase.save();
    res.status(200).json({ newPurchase });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// @desc Update existing purchase for management page.
// @route PUT /profile/manage/:id
// @access private
export const updatePurchase = async (req, res) => {
  const purchase = await Purchases.findById(req.params.id);

  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(404).json({ message: "No messsage with that ID" });
  }

  if (!req.userId) {
    res.status(401).json({ message: "User not found" });
  }

  if (purchase.user.toString() !== req.userId) {
    res.status(401).json({ message: "User not authorized" });
  }

  const updatedPurchase = await Purchases.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json({ updatedPurchase });
};

// @desc Delete a purchase for management page.
// @route DELETE /profile/manage/:id
// @access private
export const deletePurchase = async (req, res) => {
  const purchase = await Purchases.findById(req.params.id);

  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(404).json({ message: "No messsage with that ID" });
  }

  if (!req.userId) {
    res.status(401).json({ message: "User not found" });
  }

  if (purchase.user.toString() !== req.userId) {
    res.status(401).json({ message: "User not authorized" });
  }

  await purchase.remove();

  res.status(200).json({ message: `${req.params.id} removed` });
};
