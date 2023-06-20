const mongoose=require("mongoose") ;
const postSchema=new mongoose.Schema({
    title:String ,
    summary:String,
    url:String,
    contant:String ,
    author:{type:mongoose.Schema.Types.ObjectId ,ref:"user"}
},{
    timestamps:true
})
const postModel=mongoose.model("post" ,postSchema) ;
module.exports=postModel