const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    picture: {
        type: String,
        required: true
    },
    detail: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    views: {
        type: Number,
        required: true
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }
}, { timestamps: true });

export const Blog = mongoose.model('Blog', BlogSchema);
