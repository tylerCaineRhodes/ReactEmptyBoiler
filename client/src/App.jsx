import React from "react";
import InputBar from "./components/InputBar";
import List from "./components/List";
import Axios from "axios";

class App extends React.Component {
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
  }

  componentDidMount() {
    //get data on initial render
    this.getToDos()
  }

  getToDos() {
    console.log('this gets data and is called in componentDidMount')
    //write get request
  
  }

  
  addTask() {
    console.log('this does a post request');
    //write post request
    
  }
  
  deleteTask(id) {
    console.log(`this deletes an id matching ${id}`);
    //write delete request
  }
  
  onInputChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

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
  }
}

export default App;
