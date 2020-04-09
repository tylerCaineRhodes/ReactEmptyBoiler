import React from 'react';

function InputBar({onInputChange, value, onSubmit}) {
  return (
    <div>
      <input onChange={onInputChange} value={value} ></input>
      <button onClick={onSubmit}>Submit</button>
    </div>
  )
};

export default InputBar;