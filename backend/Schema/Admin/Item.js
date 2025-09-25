import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    // image: {
    //     type: String, // store URL/path
    //     required: true
    // },
    status: {
        type: String,
        enum: ['Sold Out', 'In Stock'],
        default: 'In Stock'
    },
    category: {
        type: String,
        enum: [
            "t-shirt", "hoodie", "hat", "mug", "poster",
            "sticker", "jacket", "accessory", "digital"
        ], // can add more
        required: true
    },
    brandType: {
        type: String,
        enum: [
            "Podcast",
            "Organization",
            "Institution",
            "Game",
            "Event",
            "Music",
            "Culture",
            "Other"
        ],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    size: {
        type: [String], // allow multiple sizes
        enum: ["xs", "sm", "md", "lg", "xl", "xxl"]
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Reviews"
        }
    ]
}, { timestamps: true })

export const Product = mongoose.model("Product", ProductSchema)
