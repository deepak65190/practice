const mongoose= require("mongoose") ;
const url = `mongodb+srv://bisht:bisht@cluster0.zrtnndi.mongodb.net/?retryWrites=true&w=majority`;
const connect=async()=>{
    try{
        await mongoose.connect(url ,{useNewUrlParser:true})
console.log("connected")
    }catch(err){
        console.log(err.message)
    }
}
module.exports={
    connect
}