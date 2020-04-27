import React, { useState, useEffect } from 'react';

function InputBar({ todolist, setTodos }) {
  const [input, setInput] = useState('');

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    setInput('');
  }, [todolist]);

  const onSubmit = (e) => {
    setTodos(todolist.concat(input));
  }
  return (
    <div>
      <input onChange={onInputChange} value={input} ></input>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default InputBar;
