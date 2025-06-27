import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    status:{
        enum:['soldout','In Stock'],
        type:String,
        default:"In Stock"
    },
    category:{
        enum:["t-shirt","hoodie","hat"]
    },
    price:{
        type:Number,
        required:true
    },
    size:{
        enum:["xm","sm","lg","l","xl"]
        },
        // reviews:{
        //     type:mongoose.Schema.Type.ObjectId,
        //     ref:""
        // }
},{timestamps:true})

const Product = mongoose.model("Product",ProductSchema)
export default Product