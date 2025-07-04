import mongoose from "mongoose"

const CartSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Type.ObjectId,
        ref:"Product"
    },
    userId:{
        type:mongoose.Schema.Type.ObjectId,
        ref:'User'
    }
},{timestamps:true})

export const Cart = mongoose.model("Cart",CartSchema)