const express =require("express") ;
const userRouter=express.Router() ;
const userModel = require("../models/user.model") ;


userRouter.get('/getUser' ,async(req,res)=>{
res.send("hellow")
})

userRouter.post("/userSignup" ,async(req,res)=>{
   const data=req.body 
   console.log(data)
    try{
        await userModel.create(data) ;
        res.send('sign-up successfull')
    }catch(err){
        res.send(err.message)
    }
  
})
module.exports =userRouter