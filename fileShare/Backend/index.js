const express = require("express");
const cors = require("cors");
const app = express();
const {connect}=require("./database/dp")
 const {router} =require("./Routes/file")
app.use(express.json());
app.use(cors())
app.get("/", (req,res)=>{
res.end("home page")
})
app.use("/",router)

connect()
app.listen(8080 ,()=>{
    console.log("listning 8080")
})