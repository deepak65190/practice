const mongoose =require("mongoose") ;
const {Schema,model}=mongoose ;
const userShema=new Schema({
    name:{type:String,required:true ,unique:true} ,
    password:{type:String,required:true,}
}) ;
const userModel=model("user",userShema) ;
module.exports=userModel