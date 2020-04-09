import React from 'react';

//map value and onSubmit
const InputBar = ({onInputChange, value, onSubmit}) => {
  return (
    <div>
      <input onChange={onInputChange} value={value} ></input>
      <button onClick={onSubmit}>Submit</button>
    </div>
  )
};

export default InputBar;