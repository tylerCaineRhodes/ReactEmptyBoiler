const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'todolist'
});

connection.connect(err => {
  if(err){
    console.log('couldn\'t connect to database')
  } else {
    console.log('connected to mysql database!')
  }
});

const postTask = (task, callback) => {
  connection.query(`insert into tasks (task) values ('${task}')`,(err, data) => {
    if(err){
      console.log('something went wrong in posting a task in query')
      callback(err, null)
    } else {
      callback(null, data)
    }
  })
}

const getTasks = (callback) => {
  connection.query(`select * from tasks`,(err, data) => {
    if(err){
      console.log('something went wrong when getting all tasks in query')
      callback(err, null)
    } else {
      callback(null, data)
    }
  })
}

const deleteTask = (id, callback) => {
  connection.query(`delete from tasks where id = '${id}'`,(err, data) => {
    if(err){
      console.log('something went wrong with deleting a task in the query')
      callback(err, null)
    } else {
      callback(null, data)
    }
  })
}

module.exports = {postTask, getTasks, deleteTask}