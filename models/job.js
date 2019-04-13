const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  position: { type: String, required: true },
  level: { type: String, required: true },
  salary: { type: String, required: false },
});

const User = mongoose.model("Post", jobSchema);

module.exports = Job;