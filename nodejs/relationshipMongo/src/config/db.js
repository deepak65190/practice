require("dotenv").config() ;
const mongoose =require("mongoose")
const connection =async()=>{
    return mongoose.connect(process.env.MONGO_URL);
}
module.exports=connection
