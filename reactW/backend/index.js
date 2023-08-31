const express = require("express");
const app = express();

app.get("/home",(req,res)=>{
res.send("hello ")
})
app.listen(8080, () => {
  console.log("listing on port no number 8080");
});
