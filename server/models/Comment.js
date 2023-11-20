// Comment.js module
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: String,
  author: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;