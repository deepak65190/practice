require('dotenv').config() ;
const express = require('express')
const app = express()



app.listen(process.env.PORT ,async()=>{
    console.log(`listioning on port num ${process.env.PORT}`)
})
