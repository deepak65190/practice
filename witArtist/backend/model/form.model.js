const mongoose =require("mongoose") 
const formSchema = mongoose.Schema({
  name: {type: String},
  fileUrl: {type:String},
  category:{
    type:Array
  }
});
const formModel=mongoose.model("form",formSchema) ;
module.exports={formModel}