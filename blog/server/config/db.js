const mongoose=require("mongoose") ;
const connect =mongoose.connect("mongodb+srv://bisht:bisht@cluster0.j2llgur.mongodb.net/blog?retryWrites=true&w=majority") ;
module.exports=connect