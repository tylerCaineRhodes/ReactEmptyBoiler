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
    this.getToDos = this.getToDos.bind(this);
  };

  componentDidMount() {
    this.getToDos();
  };

  getToDos() {
    Axios.get('/tasks').then((response) => {
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
    const { input } = this.state;
    Axios.post('/tasks', {
      task: input,
    })
    .then(() => {
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
    const {input, todolist} = this.state;

    return (
      <div className='todolist'>
        <h1 className ='title'>todolist</h1>
        <InputBar
          value={input}
          onInputChange={this.onInputChange}
          addTask={this.addTask.bind(this)}
        />
        <List
          todolist={todolist}
          deleteTask={this.deleteTask.bind(this)}
          updateTask={this.updateTask}
          getToDos={this.getToDos}
        />
      </div>
    );
  };
};
