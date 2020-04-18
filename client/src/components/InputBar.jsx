import React from 'react';

const InputBar = ({addTask, value, onInputChange}) => (
  <div>
    <input onChange={onInputChange} value={value}></input>
    <button onClick={addTask}>Add</button>
  </div>
);

export default InputBar;