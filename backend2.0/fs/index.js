
const fs=require("fs") ;
/*try{
    const data= fs.readFileSync("./a.text" ,{encoding:"utf-8"})  
    console.log(data)
}catch(err){
    console.log(err)
}*/

fs.writeFile("./a.text" ,"hello2" ,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("done")
    }
} )
// fs.readFile("./a.text",{encoding:"utf8"} ,(err ,data)=>{
//     if(err){
//         console.log(err ,"ee")
//     }
// console.log(data ,"eer")
// })


