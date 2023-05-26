const express=require("express") ;
const formRoute=express.Router() ;
const {formModel}=require("../model/form.model") ;
//get request
formRoute.get("/form" ,async(req,res)=>{
    try{
const data=await formModel.find() ;
res.send(data)
    }catch(err){
        console.log(err.message)
    }
})


//post request
formRoute.post("/formPost" ,async(req,res)=>{
    const payload=req.body
    try{
const data=new formModel(payload) ;
await data.save()
res.send("psoted successfully");
    }catch(err){
        console.log(err.message)
    }
})
module.exports={formRoute}