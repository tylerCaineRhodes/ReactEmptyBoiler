const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.PORT,
});

connection.connect(err => {
  if(err){
    console.log('couldn\'t connect to database')
  } else {
    console.log('connected to mysql database!')
  }
});

const postTask = (task) => {
  return new Promise((resolve, reject) => {
    connection.query(`insert into tasks (task) values ('${task}')`,(err, data) => {
      if(err){
        console.log('something went wrong in posting a task in query')
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

const getTasks = () => {
  return new Promise((resolve, reject) => {
    connection.query(`select * from tasks`,(err, data) => {
      if(err){
        console.log('something went wrong when getting all tasks in query')
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

const deleteTask = (id) => {
  return new Promise((resolve, reject) => {
    connection.query(`delete from tasks where id = '${id}'`,(err, data) => {
      if(err){
        console.log('something went wrong with deleting a task in the query')
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

module.exports = {postTask, getTasks, deleteTask}