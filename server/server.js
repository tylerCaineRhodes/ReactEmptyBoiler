require('dotenv').config();
const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const port = 1234;
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const dbName = 'todolist';

app.use(express.static(path.join(__dirname, "../client/dist/")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(process.env.MONGO_STRING,{ useUnifiedTopology: true })
  .then(client => {
    console.log('you connected to mongo');

    const db = client.db(dbName);
    const tasks = db.collection('tasks');

    app.post('/tasks', (req, res) => {
      tasks.insertOne(req.body.data)
        .then(result => {
          res.send(result);
        })
        .catch(err => {
          console.error(err);
        });
    });


    app.get('/tasks', (req, res) => {
      tasks.find({}).toArray()
        .then(results => {
          res.send(results);
        })
        .catch(err => {
          console.error('there was an error in getting tasks from server');
          res.sendStatus(418);
        });
    });


    app.delete('/tasks/:id', (req, res) => {
      tasks.deleteOne({'_id': ObjectId(req.params.id)})
        .then(response => {
          res.send(response);
        })
        .catch(err => {
          console.error('error in server in delete');
          res.sendStatus(418);
        });
    });
  })
  .catch(err => {
    console.error(err);
  });

app.listen(port, () => {
  console.log(`hurray, you're connected to port ${port}`);
});
