const http=require("http") ;
const fs=require("fs") ;
const cowsay=require("cowsay") ;
const dns=require("node:dns") ;
const param=process.argv[2] ;
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
    }else if(req.url=="/text"){
        // res.setHeader("Content-Type","text/html") ;
        res.end("<h1>hello<h1/>")
    }
    else if(req.url=="/cow"){
        res.end(cowsay.think({
            text:"hello cow",
            e:"ppp"
        }))
    } else if(req.url=="/add"){
        dns.lookup(param ,(err,address ,family)=>{
            res.write("the ip addres \n") ;
            let data=`${address} and f ${family}`
            res.end(data)
        })
    }
    else{

        res.end("hello2")
    }
})
server.listen(8080 , ()=>{
    console.log("server runnng in 8080")
})