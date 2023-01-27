import express from "express"
import mongoose from "mongoose"
//app config

const app=express()
const port=process.env.PORT || 8001

//MiddleWares



//db conifg 


// Api endpoints
app.get("/",(rea,res)=>{
    res.status(200).send("hello world")
})

//Listeners
app.listen(port,()=>{console.log(`listening on port : ${port} `)})