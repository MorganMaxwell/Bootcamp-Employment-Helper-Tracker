const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  date: {type: Date, default: Date.now },
  category: { type: String, required: true },
  likes: [{ type: Schema.Types.ObjectId, ref: "user" }],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;