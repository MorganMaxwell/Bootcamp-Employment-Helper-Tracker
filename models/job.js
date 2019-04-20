const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  position: { type: String, required: true },
  level: { type: String, required: true },
  salary: { type: Number, required: false },
  isJob: { type: Boolean, required: true}
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;