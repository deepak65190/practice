const os =require("os") ;
const dns =require('dns') ;
const fs =require("fs") ;
const arg=process.argv
//console.log(os.cpus()[0].model)
//console.log(os.version())
//console.log(os.release())
//console.log(os.uptime())
//console.log(os.type())
//console.log(os.totalmem())
//console.log(os.hostname())
//console.log(os.machine())
//console.log(os.freemem())
//console.log(dns.resolve4("google" ,(a ,r)=>a))

/* read file
fs.readFile("./test.txt" ,"utf-8" ,(err,data)=>{
console.log(data)
})*/
console.log(arg[2])