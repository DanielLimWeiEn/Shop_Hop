import express from "express";
import { scrapeFromAmazon, scrapeFromEbay } from "../webscraper/scrapers.js";

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
    let data1 = await scrapeFromAmazon(query);
    let data2 = await scrapeFromEbay(query);
    let data = [ ...data1, ...data2 ];
    res.status(200).json({ data });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
