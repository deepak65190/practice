const mongoose=require("mongoose") ;
const connection=async()=>{
    try{
const conn=await mongoose.connect(process.env.MONGO_URL) ;
console.log(`mongoDB connected : ${conn.connection.host}`)
    }catch(err){
        console.log(err.message)
        process.exit()
    }
}
module.exports=connection