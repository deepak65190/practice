import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";
dotenv.config({
  path: "./env",
});



connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(`app is listening on port no ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("connection fail !1 ", err);
  });
