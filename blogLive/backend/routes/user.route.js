const express =require("express") ;
const userRouter=express.Router() ;
const userModel = require("../models/user.model") ;
userRouter.get('/getUser' ,async(req,res)=>{
res.send("hellow")
})
module.exports =userRouter