import mongoose from 'mongoose'

const CancelledOrderSchema = new mongoose.Schema({
    orderId:{type:mongoose.Schema.Types.ObjectId,ref:"order"},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" }
},{timestamps:true})
export const CancelledOrder = mongoose.model("CancelledOrder", CancelledOrderSchema)