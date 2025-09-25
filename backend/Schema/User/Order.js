import mongoose from "mongoose"

const OrderSchema = new mongoose.Schema({
    productId:{type:mongoose.Schema.Types.ObjectId, ref:"Product"},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    timeUntil:{type:Date}
},{timestamps:true})
 
export const Order = mongoose.model("Order",OrderSchema)