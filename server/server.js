const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const port = 4000;
const { postTask, getTasks, deleteTask } = require("../db/querys.js");

app.use(express.static(path.join(__dirname, "../client/dist/")));
app.use(bodyParser.json());

app.get("/tasks", (req, res) => {
 
});

app.post("/tasks", (req, res) => {

});

app.delete("/tasks", (req, res) => {

});

app.listen(port, () => {
  console.log(`hurray, you're connected to port ${port}`);
});
