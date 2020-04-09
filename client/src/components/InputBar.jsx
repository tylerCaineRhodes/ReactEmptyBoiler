import React from 'react';

//map value and onSubmit
//onchange can update the state and onsubmit can append that state to the list
const InputBar = ({onSubmit}) => {
  var input;
  return (
    <div>
      <input ref={node => (input = node)}></input>
      <button onClick={() => onSubmit(input.value)}>Submit</button>
    </div>
  )
};

export default InputBar;