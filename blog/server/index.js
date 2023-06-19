const express = require("express");
const cors = require("cors");
const userModel = require("./model/user");
const connect = require("./config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cors({credentials:true,origin:'http://localhost:5173'}));
app.use(cookieParser());
app.use(express.json());
app.post("/register", async (req, res) => {
  const { name, password } = req.body;

  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        res.send(err.message);
      } else {
        await userModel.create({ name, password: hash });
        res.status(200).send("register successfull");
      }
    });
  } catch (err) {
    res.send(err.message);
  }
});

app.post("/login", async (req, res) => {
  const { name, password } = req.body;
  try {
    const user = await userModel.findOne({ name });
    console.log(user);
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        res.send(err.message);
      } else {
        if (result) {
          jwt.sign({ name, id:user._id }, "deepak", {}, (err, token) => {
            if (err) {
              res.send(err.message);
            } else {
              res.cookie("token", token).json({name,id:user._id});
            }
          });
        } else {
          res.send("wrong password");
        }
      }
    });
  } catch (err) {
    console.log(err.message);
  }
})

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  console.log(token,'jhfhf')
  try{
    jwt.verify(token, "deepak", {}, (err, info) => {
        if (err) {
          console.log(err.message ,"err");
        } else {
          res.json(info);
        }
      });
  }catch(err){
    console.log(err.message)
  }
  
});

app.post('/logout', (req,res) => {
    res.cookie('token', '').json('ok');
  });






app.listen(8080, async () => {
  try {
    await connect;
    console.log("server connected");
    console.log("running on 8080 port");
  } catch (err) {
    console.log(err.message);
  }
});
