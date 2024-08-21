const express=require("express") ;
const {registerUser ,authUser , allUsers}=require("../controllers/user.controller")
const userRouter=express.Router() ;
const {protect} =require("../middleware/auth.middleware")
userRouter.route("/").post(registerUser).get(protect, allUsers)
userRouter.route("/login").post(authUser)

module.exports=userRouter