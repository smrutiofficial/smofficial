import mongoose, { Schema } from "mongoose";

const CommentSchema = new Schema({
    username: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    avatar: {
        type: String,
    },
    rateing: {
        type: Number,
        required: true
    },
    review: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
})

export const Comment = mongoose.model("Comment", CommentSchema)