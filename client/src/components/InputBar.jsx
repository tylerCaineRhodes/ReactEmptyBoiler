import React from 'react';

const InputBar = ({addTask, value, onInputChange}) => (
  <div className='inputBar'>
    <input onChange={onInputChange} value={value} placeholder ='add task'></input>
    <button onClick={addTask}>Add</button>
  </div>
);

export default InputBar;