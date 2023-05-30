const mongoose=require("mongoose") ;
const todoSchema=mongoose.Schema({
    title:{type:String ,required:true},
    desc:{type:String ,required:true} ,
    isCompleted:{type:Boolean ,required:true}
}) ;
const todoModel=mongoose.model("todo",todoSchema) ;
module.exports=todoModel