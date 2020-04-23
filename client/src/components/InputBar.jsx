import React, { useRef } from 'react';

const InputBar = ({ onSubmit }) => {
  let input = useRef(null);

  return (
    <div>
      <form
        id="best"
        onSubmit={(e) => {
          e.preventDefault();

          onSubmit(input.current.value);
          document.getElementById('best').reset();
        }}
      >
        <input ref={input}></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputBar;
