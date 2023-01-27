import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import Cors from "cors"
dotenv.config()
//app config

const app=express()
const port=process.env.PORT || 8001
const connectUrl=`mongodb+srv://admin:${process.env.PASSWORD}@cluster0.pishfig.mongodb.net/?retryWrites=true&w=majority`
//MiddleWares
app.use(express.json())
app.use(Cors())
//db conifg 
mongoose.connect(connectUrl,{
    useNewUrlParser:true
})
const db=mongoose.connection
// Api endpoints
app.get("/",(req,res)=>{
    res.status(200).send("hello world")
})

//Listeners
app.listen(port,()=>{console.log(`listening on port : ${port} `)})