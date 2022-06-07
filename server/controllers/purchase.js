import Purchases from '../models/purchases.js';
import User from '../models/user.js';

export const showProfile = (req, res) => {
    res.status(200).json({message: "GET /profile/ works"});
}

export const showPurchaseHistory = (req, res) => {
    res.status(200).json({message: "GET /profile/history works"});
}

export const showPurchases = (req, res) => {
    res.status(200).json({message: "GET /profile/manage works"});
}

export const addPurchase = (req, res) => {
    res.status(200).json({message: "POST /profile/manage works"});
}

export const updatePurchase = (req, res) => {
    res.status(200).json({message: "PUT /profile/manage/:id works"});
}

export const deletePurchase = (req, res) => {
    res.status(200).json({message: "DELETE /profile/manage/:id works"});
}