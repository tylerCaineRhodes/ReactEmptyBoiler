const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const port = 1234;
// const { postTask, getTasks, deleteTask } = require("../db/querys.js").default;

app.use(express.static(path.join(__dirname, "../client/dist/")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID
const dbName = 'todolist';

MongoClient.connect(process.env.MONGO_STRING,{ useUnifiedTopology: true })
  .then(client => {
    console.log('you connected to mongo')
    const db = client.db(dbName)
    const tasks = db.collection('tasks')

    app.post('/tasks', (req, res) => {
      console.log(req.body.data)
      tasks.insertOne(req.body.data)
        .then(result => {
          res.send(result)
        })
        .catch(err => {
          console.error(err)
        })
    })

    app.get('/tasks', (req, res) => {
      tasks.find({}).toArray((err, results) => {
        if(err){
          console.log('err in getting tasks')
        }
        console.log(results)
        res.send(results)
      })
    })

    app.delete('/tasks/:id', (req, res) => {
      tasks.deleteOne({'_id': ObjectId(req.params.id)}, (err, results) => {
        if(err){
          console.log('something bad in delete')
        } else {
          console.log('deleted the thing?')
          res.send(results)
        }
      })

    })

  })
  .catch(err => {
    console.error(err)
  })

app.listen(port, () => {
  console.log(`hurray, you're connected to port ${port}`);
});
