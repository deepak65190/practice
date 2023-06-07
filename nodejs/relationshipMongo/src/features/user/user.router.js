const express = require("express");
const User = require("./user.model");
const app = express.Router();

//login request
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      if (password === user.password) {
        res.send({ token: `${user.email}_#_${user.password} `, user });
      } else {
        res.status(401).send("authentication fail wrong password");
      }
    } else {
      res.status(404).send(`user not found with this email id ${email}`);
    }
  } catch (err) {
    res.status(404).send(err.message);
  }
});

//signup request
app.post("/signup", async (req, res) => {
  const { email, password, age, name } = req.body;
  try {
    const exist = await User.findOne({ email });
    if (exist) {
      res.send("user already exist with this email");
    }
    await User.create({ email, password, age, name });
    res.status(200).send({ token: `${email}_#_${password}` });
  } catch (err) {
    res.status(404).send(err.message);
  }
});
module.exports = app;
