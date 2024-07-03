const express=require("express") ;
const app =express() ;
app.use(express.json())
app.get("/" ,(req,res)=>{
    res.send("hello oafda") ;
})
app.post(("/data"),(req,res)=>{
    
})
console.log(app.listen())
app.listen(8080 ,()=>{
    console.log("8080")
})