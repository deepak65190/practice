const express=require('express') ;
const app = express() ;
app.get("/" ,(req,res)=>{
    res.send("hello")
})
app.get("/data/:id2" ,(req,res)=>{
    console.log(req.params) ;
   
    res.send("data")
})
app.listen(8080 ,()=>{
    console.log("hello")
})