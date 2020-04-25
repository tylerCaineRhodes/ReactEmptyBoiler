require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const dbName = 'todolist';

MongoClient.connect(process.env.MONGO_STRING, { useUnifiedTopology: true })
  .then((client) => {
    console.log('you connected to mongo');
    const db = client.db(dbName);
    const tasks = db.collection('tasks');

    app.post('/tasks', (req, res) => {
      console.log(req.body.data);
      tasks.insertOne(req.body.data)
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          console.error(err);
        });
    });

    app.get('/tasks', (req, res) => {
      tasks.find({}).toArray((err, results) => {
        if (err) {
          console.log('err in getting tasks');
        }
        console.log(results);
        res.send(results);
      });
    });

    app.delete('/tasks/:id', (req, res) => {
      tasks.deleteOne({ _id: ObjectId(req.params.id) }, (err, results) => {
        if (err) {
          console.log('something bad in delete');
        } else {
          console.log('deleted the thing?');
          res.send(results);
        }
      });
    });
  })
  .catch((err) => {
    console.error(err);
  });


const postTask = (task, callback) => {
  tasks.insertOne(task)
    .then((result) => {
      callback(result);
    })
    .catch((err) => {
      console.error(err);
      callback(err)
    });
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

// export default {postTask, getTasks, deleteTask}