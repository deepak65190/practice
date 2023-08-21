require('dotenv').config() ;
const express = require('express')
const connection=require("./config/db")
const userRouter=require("./routes/user.route") ;

const app = express() ;
app.use(express.json())
app.use("/user",userRouter)

app.listen(process.env.PORT ,async()=>{
    await connection
    try{
        console.log('connected to db')
        console.log(`listioning on port num ${process.env.PORT}`)
    }catch(err){
        console.log(err.message)
    }
    
})
