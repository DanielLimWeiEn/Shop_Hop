import Purchases from '../models/purchases.js';
import User from '../models/user.js';

// @desc Display user profile page.
// @route GET /profile/
// @access private
export const showProfile = async (req, res) => {
    res.status(200).json({message: "GET /profile/ works"});
}

// @desc Show user purchase history for history page.
// @route GET /profile/history
// @access private
export const showPurchaseHistory = async (req, res) => {
    const purchases = await Purchases.find({ user: req.userId });

    res.status(200).json({ purchases });
}

// @desc Display user purchases for management page.
// @route GET /profile/manage
// @access private
export const showPurchases = async (req, res) => {
    const purchases = await Purchases.find({ user: req.userId });

    res.status(200).json({ purchases });
}

// @desc Add a new to user for the management page.
// @route POST /profile/manage
// @access private
export const addPurchase = async (req, res) => {
    res.status(200).json({message: "POST /profile/manage works"});
}

// @desc Update existing purchase for management page.
// @route PUT /profile/manage/:id
// @access private
export const updatePurchase = async (req, res) => {
    res.status(200).json({message: "PUT /profile/manage/:id works"});
}

// @desc Delete a purchase for management page.
// @route DELETE /profile/manage/:id
// @access private
export const deletePurchase = async (req, res) => {
    res.status(200).json({message: "DELETE /profile/manage/:id works"});
}