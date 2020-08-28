const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  filepath: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 1,
  },
  type: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  date: { type : Date, required: true },
  tags: [{ type: String }],
}, {
  timestamps: true,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
