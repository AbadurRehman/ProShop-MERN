import express from "express";
import products from "./data/product.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const port = process.env.PORT;

// var cors = require("cors");

const app = express();

app.use(cors());
app.listen(8001);

app.get("/", (req, res) => {
  res.send("Api request");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id == req.params.id);
  res.json(product);
});