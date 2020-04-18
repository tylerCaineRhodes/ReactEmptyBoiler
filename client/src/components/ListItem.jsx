import React from 'react';

function ListItem({todoitem, deleteTask, id}){
  return ( 
    <div key={id}>
      <span>{todoitem}</span>
      <button onClick={() => deleteTask(id)}>Delete</button>
    </div>
  )
}

export default ListItem;