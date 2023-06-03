const express = require("express");
const app = express();
const fs=require("fs")
const db = require("./db.json");
app.get("/get", (req, res) => {
  console.log(req.method, req.url);
  res.write("hello word");
  res.end();
});
app.get("/post", (req, res) => {
  res.send(db);
});

app.post("/data" ,(req,res)=>{
    db.post.push({id:3 ,message:"hello3"})
fs.writeFile("./src/db.json" ,JSON.stringify(db) ,"utf-8" ,()=>{
res.send(db.post)
})
})



app.listen(8080, (req, res) => {
  console.log("listing on 8080 port");
});
