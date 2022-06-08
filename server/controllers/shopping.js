import express from "express";
import { scrapeFromAmazon, scrapeFromEbay, scrapeFromLazada } from "../webscraper/scrapers.js";

// @desc Show the shopping page.
// @route GET /shopping/
// @access private
export const showShopping = (req, res) => {
  try {
    res.status(200).json({ message: "this is working" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// @desc Call the web scrapers to scrape items.
// @route POST /shopping/search
// @access private
export const generateShopping = async (req, res) => {
  try {
    const { query } = req.body;
    let data1 = await scrapeFromAmazon(query);
    let data2 = await scrapeFromEbay(query);
    let data3 = await scrapeFromLazada(query)
    let data = [...data1, ...data2, ...data3];
    res.status(200).json({ data });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
