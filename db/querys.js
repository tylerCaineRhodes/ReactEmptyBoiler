const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'FILL_ME_IN',
  user: 'FILL_ME_IN',
  password: 'FILL_ME_IN',
  database: 'FILL_ME_IN'
});

connection.connect(err => {
  if(err){
    console.log('couldn\'t connect to database')
  } else {
    console.log('connected to mysql database!')
  }
});

const postTask = (task, callback) => {

}

const getTasks = (callback) => {

}

const deleteTask = (id, callback) => {

}

module.exports = {postTask, getTasks, deleteTask}