const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  jobs: [{ type: Object, required: false }],
});

const User = mongoose.model("Post", userSchema);

module.exports = User;