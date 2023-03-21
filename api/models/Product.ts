import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        images: {
            type: Array,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        colors: {
            type: Array,
            required: true,
        },
        size: {
            type: Array,
            required: true,
        },
        inStock: {
            type: Boolean,
            required: true,
            default: true,

        },
    },
    {
        timestamps: true,
    }
)



export const ProductModel = mongoose.model("Product", productSchema);