const express = require("express");
const app = express.Router();
const Cart = require("./cart.model");
const User = require("../user/user.model");

const authMiddleware = async (req, res, next) => {
  const token = req.headers.token;
  console.log(token);
  const [email, password] = token.split("_#_");
  try {
    let user = await User.findOne({ email });
    if (user) {
      if (password === user.password) {
        req.userId = user.id;
        next();
      } else {
        res.send("wrong password");
      }
    } else {
      res.send("email not found");
    }
  } catch (err) {
    res.send(err.message);
  }
};
app.use(authMiddleware);

app.get("/", async (req, res) => {
  try {
    const cart = await Cart.find({ user: req.userId }).populate([
      "user",
      "product",
    ]);

    res.status(200).send(cart);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.post("/c", async (req, res) => {
  try {
    const cart = await Cart.create(req.body);

    res.status(200).send(cart);
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
});
module.exports = app;
