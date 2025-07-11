import mongoose from "mongoose"

const OrderSchema = new mongoose.Schema({
    productId:{type:mongoose.Schema.Types.ObjectId, ref:"Product"},
    time:{type:Date}
},{timestamps:true})
 
export const Order = mongoose.model("Order",OrderSchema)