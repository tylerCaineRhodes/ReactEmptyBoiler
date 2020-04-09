import React from 'react';

const ListItem = ({todoitem, doneButtonClick}) => {
  return ( 
    <div>
      <span>{todoitem}</span>
      <button onClick={(e) => {doneButtonClick(e.target.value)}} value={todoitem}>Done</button>
    </div>
  )
}

export default ListItem;