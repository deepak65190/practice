    require("dotenv").config()
    const express=require("express") ;

    const app=express() ;

    app.use(express.json())
    app.get("/",(req,res)=>{
        res.send("hello world") ;
    })
    
    //port number
    const port=process.env.PORT||3000 ;

    //listion server
    app.listen(port ,(req,res)=>{
        try{
    console.log(`server is listiong on port no ${port}`)
        }catch(err){
            res.send(err.message)
        }
    })