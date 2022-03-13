import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export default const postSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        index: true,
    },

    filepath: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 1,
    },

    tags: [{ type: String }],

    date: {
        type: Date,
        default: Date.now(),
        index: true,
        required: true
    },
});
