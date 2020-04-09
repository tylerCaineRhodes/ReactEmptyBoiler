import React from 'react';
import InputBar from './components/InputBar'
import List from './components/List';

const App = () => {
  return (
    <div>
      <h1>toDo list</h1> 
      <InputBar />
      <List />
    </div>
  )
}

export default App;