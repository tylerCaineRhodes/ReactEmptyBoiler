import React from "react";
import InputBar from "./components/InputBar";
import List from "./components/List";
import Axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todolist: [],
      input: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.getToDos = this.getToDos.bind(this);
  };

  componentDidMount() {
    this.getToDos();
  };

  getToDos() {
    Axios.get('/tasks').then((response) => {
      console.log('this is from the get request', response);
      this.setState({
        todolist: response.data,
      });
    });
  };

  onInputChange(event) {
    this.setState({
      input: event.target.value,
    });
  };

  addTask() {
    Axios.post('/tasks', {
      task: this.state.input,
    })
    .then((response) => {
      this.setState({
        input: '',
      });
    })
    .then(() => this.getToDos())
    .catch((err) => {
      console.log('something went wrong with posting a task', err);
    });
  };

  deleteTask(id) {
    Axios.delete(`/tasks/${id}`)
    .then(() => {
      this.getToDos();
    })
    .catch((err) => console.log('couldn\'t delet task from client -->', err));
  };

  render() {
    return (
      <div>
        <h1>toDo list</h1>
        <InputBar
          value={this.state.input}
          onInputChange={this.onInputChange}
          addTask={this.addTask}
        />
        <List
          todolist={this.state.todolist}
          deleteTask={this.deleteTask}
        />
      </div>
    );
  };
};
