const express=require("express") ;
const {registerUser ,authUser}=require("../controllers/user.controller")
const userRouter=express.Router() ;

userRouter.route("/").post(registerUser)
userRouter.route("/login").post(authUser)

module.exports=userRouter