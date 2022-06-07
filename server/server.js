import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import userRoutes from './routes/users.js';
import shoppingRoutes from './routes/shoppings.js';
import profileRoutes from './routes/profiles.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/user', userRoutes);
app.use('/shopping', shoppingRoutes);
app.use('/profile', profileRoutes);

const PORT = 5000;
const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error));