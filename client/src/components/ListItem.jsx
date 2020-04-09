import React from 'react';

function ListItem({todoitem, doneButtonClick}){
  return ( 
    <div>
      <span>{todoitem}</span>
      <button onClick={doneButtonClick} value={todoitem} >Done</button>
    </div>
  )
}

export default ListItem;