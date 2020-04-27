import React, { useState } from 'react';
import InputBar from './components/InputBar'
import List from './components/List';

const App = () => {

  const [todolist, setTodos] = useState(['learn to code', 'make todolist', 'get paid']);

  return (
    <div>
      <h1>toDo list</h1>
      <InputBar todolist={todolist} setTodos={setTodos} />
      <List todolist={todolist} setTodos={setTodos} />
    </div>
  );
};

export default App;
