const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  text: { type: String, required: true },
  category: { type: String, required: true },
  likes: [{ type: Schema.Types.ObjectId, ref: "user" }]
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;