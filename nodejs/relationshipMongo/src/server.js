require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

const userRoute = require("./features/user/user.router");
const productRoute = require("./features/product/product.router");
const cartRoute = require("./features/cart/cart.router");

app.use("/users", userRoute);
app.use("/products", productRoute);
app.use("/cart", cartRoute);

app.listen(process.env.PORT, async () => {
  try {
    await connection();
    console.log("conntected to db");
    console.log("listing on port 8080");
  } catch (err) {
    console.log(err.message);
  }
});
