const express=require("express") ;
const {protect} =require("../middleware/auth.middleware");
const chat = require("../model/chat.model");

const chatRouter=express.Router();
chatRouter.route("/").post(protect ,createChat) ;
// chatRouter.route("/").get(protect ,fetchChat) ;
// chatRouter.route("/createGroup").post(protect ,createGroup) ;
// chatRouter.route("/renameGroup").put(protect ,renameGroup) ;
// chatRouter.route("/removeGroup").put(protect ,removeGroup) ;
// chatRouter.route("/addGroup").put(protect ,addGroup) ;
module.exports=chatRouter