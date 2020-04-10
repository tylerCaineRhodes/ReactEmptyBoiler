import React from 'react';

const InputBar = ({onSubmit}) => {
  let input;
  
  return (
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