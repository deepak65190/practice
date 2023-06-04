const express=require("express") ;
const cors=require("cors") ;
const app=express() ;
app.use(cors())
const looger1=(req,res,next)=>{
    console.log("before 1")
    next() ;
    console.log("after 1 ")
}
const looger2=(req,res,next)=>{
    console.log("before 2")
    next() ;
    console.log("after 2 ")
}

app.get("/"  ,looger2,looger1,(req,res)=>{
console.log("hii 1")
res.end()
})
app.listen(8080 ,()=>{
    console.log("listing on 8080 port")
})