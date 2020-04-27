require('dotenv').config();

const mongoose = require('mongoose');
const { Task } = require('./schema.js');

mongoose.connect(process.env.MONGO_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const mongoCommand = mongoose.connection;
mongoCommand.once('open', () => {
  console.log('connected to the mongo database');
});


mongoCommand.on('error', () => {
  console.log('nahhh bro, mongo no like dat dawg');
});



const postTask = (task) => {
  const newTask = new Task({ task });
  return newTask.save();
};


const getTasks = () => {
  return Task.find({});
};


const deleteTask = (id) => {
  return Task.deleteOne({ _id: id });
};


const updateTask = (id, task) => {
  return Task.updateOne({ _id: id }, { task: task });
};

module.exports = { postTask, getTasks, deleteTask, updateTask };