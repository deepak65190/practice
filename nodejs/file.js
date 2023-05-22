const fs =require("fs") ;
// const read=fs.readFileSync("./test.txt" ,"utf-8" ) ;
// console.log(read)
fs.readFile("./test.text",(err,res)=>{
if(err){
    console.log(err)
}else console.log(res)
})
const write=fs.writeFileSync("./test.txt","hello 2.0" ,"utf-8") ;
console.log(write)