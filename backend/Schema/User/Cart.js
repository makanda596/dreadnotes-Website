import mongoose from "mongoose"

const CartSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true})

export const Cart = mongoose.model("Cart",CartSchema)