import mongoose, { Schema } from "mongoose";

const CommentSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowecase: true,
        trim: true,
        index: true
    },
    avatar: {
        type: String,
    },
    review: {
        type: String,
        required: true,
    }
})

export const Comment = mongoose.model("Comment", CommentSchema)