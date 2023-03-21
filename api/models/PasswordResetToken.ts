import mongoose from "mongoose";

const passwordResetTokenSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        token: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            required: true,
            default: Date.now,
            expires: 3600,
        },
    },
    {
        timestamps: true,
    }
);

export const PasswordResetTokenModel = mongoose.model("PasswordResetToken", passwordResetTokenSchema);