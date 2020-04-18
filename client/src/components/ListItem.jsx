import React from 'react';

const ListItem = ({todoitem, deleteTask, id}) => (
  <div key={id}>
    <span>{todoitem}</span>
    <button onClick={() => deleteTask(id)}>Delete</button>
  </div>
);

export default ListItem;
