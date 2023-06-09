const express = require("express");
const userModel = require("../models/user.model");
const userRouter = express.Router();

//signup
userRouter.post("/signup", async (req, res) => {
  const { name, password, email } = req.body;
  try {
    const existName = await userModel.find({ name });
    
    if (existName.length > 0) {
      res.send("0");
    } else {
      const data = new userModel({ name, password, email });
      await data.save();
      res.status(200).send("account created");
    }
  } catch (err) {
    res.send(err.message);
  }
});

//login
userRouter.post("/login", async (req, res) => {
  const { name, password } = req.body;
  try {
    const exitstUser = await userModel.findOne({ name });
    if (exitstUser) {
      if (password === exitstUser.password) {
        res.status(200).send("1");
      } else {
        res.send("0");
      }
    } else {
      res.send("user not found");
    }
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = userRouter;
