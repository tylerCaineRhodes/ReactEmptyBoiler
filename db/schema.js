const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const DataSchema = new Schema(
  {
    task: String
  }
);
const Task = mongoose.model('tasks', DataSchema);
module.exports = {Task};
