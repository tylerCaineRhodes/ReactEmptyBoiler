const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
require('dotenv').config();
const port = process.env.PORT;
const { postTask, getTasks, deleteTask } = require("../db/querys.js");

app.use(express.static(path.join(__dirname, "../client/dist/")));
app.use(bodyParser.json());

app.get("/tasks", (req, res) => {
  getTasks()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

app.post("/tasks", (req, res) => {
  postTask(req.body.task)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.delete("/tasks/:id", (req, res) => {
  deleteTask(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

app.listen(port, () => {
  console.log(`hurray, you're connected to port ${port}`);
});
