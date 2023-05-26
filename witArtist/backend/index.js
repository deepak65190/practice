require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { formRoute } = require("./routes/form");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", formRoute )
app.listen(process.env.PORT, async (req, res) => {
  try {
    await connection;
    console.log("connected to db");
    console.log("listing on"  +  process.env.PORT);
  } catch (err) {
    console.log(err.message);
  }
});
