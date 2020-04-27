require('dotenv').config();
const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const port = process.env.PORT;
const { postTask, getTasks, deleteTask, updateTask } = require("../db/querys.js");

app.use(express.static(path.join(__dirname, "../client/dist/")));
app.use(cors());
app.use(bodyParser.json());

app.get("/tasks", (req, res) => {
  getTasks()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.sendStatus(418);
    });
});

app.post("/tasks", (req, res) => {
  postTask(req.body.task)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.delete("/tasks/:id", (req, res) => {
  deleteTask(req.params.id)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

app.put('/tasks', (req, res) => {
  const { id, task } = req.body;

  updateTask(id, task)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(418);
    });
});

app.listen(port, () => {
  console.log(`hurray, you're connected to port ${port}`);
});
