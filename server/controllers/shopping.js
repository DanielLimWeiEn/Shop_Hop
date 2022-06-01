import express from "express";
import { scrapeFromAmazon } from "../webscraper/scrapers.js";

export const showShopping = (req, res) => {
  try {
    res.status(200).json({ message: "this is working" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const generateShopping = async (req, res) => {
  try {
    const { query } = req.body;
    let data = await scrapeFromAmazon(query);
    res.status(200).json({ data });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
