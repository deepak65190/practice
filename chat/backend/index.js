require("dotenv").config()
const express=require("express") ;
const connection =require("./config/db") ;
const cors=require("cors") ;
const userRoute =require("./routes/user.route") ;
const chatRouter =require("./routes/chat.route")
const app=express() ;
app.use(cors("*"))
app.use(express.json())

//home route
app.get("/" ,(req,res)=>{
    res.send("hello world")
}) ;

app.use("/api/user" ,userRoute)
app.use("/api/chat" ,chatRouter)

// 404 handler
app.use((req, res, next) => {
    res.status(404).json({ message: 'Not Found' });
});
// Centralized error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error',
        stack: process.env.NODE_ENV === 'development' ? err.stack : {}
    });
});


//port
const port=process.env.PORT||8080 ;

//listening appp
app.listen(port ,(req,res)=>{
    try{
connection()
        console.log(`listion on port nu ${port}`)
    }catch(err){
        console.log(err)
    }
})