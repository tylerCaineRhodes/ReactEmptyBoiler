import React from 'react';

//map value and onSubmit
//onchange can update the state and onsubmit can append that state to the list
const InputBar = ({onSubmit}) => {
  let input;
  
  return (
    // <div>
    //   <input ref={node => (input = node)}></input>
    //   <button onClick={() => onSubmit(input.value)}>Submit</button>
    // </div>

    <div>
      <form id='best' onSubmit={(e) => {
        e.preventDefault();
        onSubmit(input.value)
        document.getElementById('best').reset();
      }}>
      <input ref={node => (input = node)}></input>
      <button type="submit">Submit</button>
      </form>
    </div>
  )
};

export default InputBar;