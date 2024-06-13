import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
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
    fullname: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    }
})
userSchema.pre("save", async (next) => {
    if (!this.isModified("password")) return next();

    this.password = bcrypt.hash(password, 10)
    next()
})

export const User = mongoose.model("User", userSchema)