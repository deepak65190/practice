const express =require("express") ;
 const {userModel}=require("../models/user.model")
const userRoute=express.Router() ;
userRoute.post("/register",async(req,res)=>{
try{
    const {name ,password ,email}=req.body
   
    const userData=new userModel({name,email ,password}) ;
    console.log(userData)
    await userData.save() ;
res.send("ok")
}catch(err){
    console.log("something went wrong") 
    res.send(err)
}
})
module.exports={userRoute}