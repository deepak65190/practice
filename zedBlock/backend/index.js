require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./config/db");
const userRouter = require("./routes/user.route");
const todoRouter = require("./routes/todo.route");
const app = express();
app.use(cors());
app.use(express.json());

app.get("/home", (rq, res) => {
  res.send("<h3>Welcome to zedblock assignment</h3>");
});

app.use("/", userRouter);
app.use("/", todoRouter);
//listioning
app.listen(process.env.PORT, async (req, res) => {
  try {
    await connection;
    console.log("connected to db");
    console.log("running on port 8080");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

