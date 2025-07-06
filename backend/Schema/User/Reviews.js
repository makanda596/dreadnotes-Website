import mongoose from 'mongoose'

const ReviewSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
    message:{
        type:String,
        required:true
    },
    // image:{
    //     type:String,
    // }
},{timestamps:true})

export const Review = mongoose.model("Review", ReviewSchema)