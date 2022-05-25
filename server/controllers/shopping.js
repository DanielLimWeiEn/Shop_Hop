import express from "express";

export const showShopping = (req, res) => {
    try {
        res.status(200).json({"message": "this is working"});
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}