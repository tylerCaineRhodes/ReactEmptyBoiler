import React from 'react';

const ListItem = ({ todoitem, doneButtonClick }) => (
  <div>
    <span>{todoitem}</span>
    <button onClick={doneButtonClick} value={todoitem} >Done</button>
  </div>
);

export default ListItem
