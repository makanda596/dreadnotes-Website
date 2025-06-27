import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    desc:{
        type:String
    },
    image:{
        type:String
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
    },
    size:{
        enum:["xm,sm,lg,l,xl"]
        },
        reviews:{
            type:mongoose.type.Schema.review
        }
},{timestamps:true})

const Product = mongoose.model("Product",ProductSchema)
export default Product