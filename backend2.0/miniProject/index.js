const express=require("express") ;
 const connection=require("./config/db") ;
const {userRoute}=require("./routes/user.route.js")
const app =express() ;
app.use(express.json()) ;

app.get("/",(req ,res)=>{
    res.send("hello")
})
app.use("/user",userRoute)
app.listen(8080 ,async(err)=>{
    try{
        await connection
        console.log("connected")
    }catch(err){
console.log(err)
    }
console.log(8080)
   
})