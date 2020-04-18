import React from "react";
import InputBar from "./components/InputBar";
import List from "./components/List";
import Axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todolist: [],
      input: "",
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.doneButtonClick = this.doneButtonClick.bind(this);
    this.getToDos = this.getToDos.bind(this);
  }

  componentDidMount() {
    this.getToDos();
  }

  getToDos() {
    Axios.get("/allTasks").then((response) => {
      console.log("this is from the get request", response);
      this.setState({
        todolist: response.data,
      });
    });
  }

  onInputChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  onSubmit() {
    // console.log('clicked!', this.state.input)
    Axios.post("/postTask", {
      task: this.state.input,
    })
      .then((response) => {
        // console.log('succesfully posted a task -->', response)
        this.setState({
          input: "",
        });
      })
      .then(() => this.getToDos())
      .catch((err) => {
        console.log("something went wrong with posting a task", err);
      });
  }

  doneButtonClick(e) {
    // const task = e.target.value;
    // console.log('id from client -->', task);
    Axios.delete("/deleteTask", {
      params: { task: e.target.value },
    })
      .then(() => {
        this.getToDos();
      })
      .catch((err) => console.log("couldn't delet task from client -->", err));
  }

  render() {
    return (
      <div>
        <h1>toDo list</h1>
        <InputBar
          value={this.state.input}
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
        <List
          todolist={this.state.todolist}
          doneButtonClick={this.doneButtonClick}
        />
      </div>
    );
  }
}

export default App;
