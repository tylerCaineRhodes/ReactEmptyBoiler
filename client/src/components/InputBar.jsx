import React from 'react';

function InputBar({addTask, value, onInputChange}) {
  return (
    <div>
      <input onChange={onInputChange} value={value}></input>
      <button onClick={addTask}>Submit</button>
    </div>
  )
};

export default InputBar;