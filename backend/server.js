import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDb();

const port = process.env.PORT;

// var cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Api request");
});
app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(8080);
