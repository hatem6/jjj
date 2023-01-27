import mongoose from "mongoose";

const cardsSchema=mongoose.Schema({
    id:Number,
    name:String,
    image:String
})
export default mongoose.model("cards",cardsSchema)