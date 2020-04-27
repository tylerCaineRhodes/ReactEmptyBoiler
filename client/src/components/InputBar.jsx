import React from 'react';

function InputBar(props) {
  return (
    <div>
      <input onChange={props.onInputChange} value={props.value} ></input>
      <button onClick={props.onSubmit}>Submit</button>
    </div>
  );
};

export default InputBar;