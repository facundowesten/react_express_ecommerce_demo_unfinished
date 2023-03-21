import mongoose from "mongoose";
import { IUser } from "../interfaces/IUser";



const userSchema = new mongoose.Schema<IUser>(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            minlength: 3
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true
        },
        isAdmin: {
            type: Boolean,
            default: false,
        }
    },
    {
        timestamps: true,
    }
)



export const UserModel = mongoose.model<IUser>("User", userSchema);