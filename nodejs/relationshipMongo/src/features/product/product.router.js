const express = require("express");
const app = express.Router();
const Product = require("./product.model");

app.get("/", async (req, res) => {
  const { limit = 10, page = 1 } = req.body;
  try {
    const products = await Product.find()
      .limit(limit)
      .skip((page - 1) * limit);
    res.status(200).send(products);
  } catch (err) {
    res.status(400).send(err.message);
  }
});
module.exports = app;
