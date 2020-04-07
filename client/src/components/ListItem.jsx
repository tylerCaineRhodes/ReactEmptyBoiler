import React from 'react';

function ListItem(props){
  return ( 
    <div>
      <span>{props.todoitem}</span>
      <button onClick={props.doneButtonClick} value={props.todoitem} >Done</button>
    </div>
  )
}

export default ListItem;