import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        products: {
            type: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                    default: 1,
                }
            }
        ],
        validate: (v: any) => Array.isArray(v) && v.length > 0,
    },
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        zip: {
            type: Number,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            default: "Pending",
        }
    },
    {
        timestamps: true,
    }
)

export const OrderModel = mongoose.model("Order", orderSchema);