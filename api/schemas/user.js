import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// TODO
// regex on username and email

export default const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        minLength: 4,
        maxLength: 20,
    },

    password: {
        type: String,
        required: true,
    },

    name: {
        type: String,
        trim: true,
        minlength: 4,
        maxLength: 30,
    }

    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        minlength: 4,
    },

    savedPosts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
});
