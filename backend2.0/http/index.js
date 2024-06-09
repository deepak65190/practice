const http=require("http") ;
const fs=require("fs")
const server=http.createServer((req,res)=>{
    if(req.url==="/home"){
        res.end("hello home")
    }else if(req.url=="/data"){

fs.readFile("./data.json" ,{encoding:"utf-8"},(err ,data)=>{
    if(err){
        console.log(err ,"something went wrong")
    }else{
        res.setHeader('Content-Type', 'application/json');
        res.end(data)
    }
})
    }
    else{

        res.end("hello")
    }
})
server.listen(8080 , ()=>{
    console.log("server runnng in 8080")
})