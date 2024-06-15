import mongoose, { Schema } from "mongoose";



const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        lowecase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowecase: true,
    },
    avatar: {
        type: String,
        default:""
    },
    password: {
        type: String,
        required: true,
    }
},{timestamps:true});

export const User = mongoose.model("User", userSchema)
