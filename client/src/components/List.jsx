import React from 'react';
import ListItem from './ListItem';

function List({todolist, doneButtonClick}){
  return (
    <div>
      <ul>
        {todolist.map((thing, i) => (
          <div key={i}>
            <ListItem todoitem={thing} doneButtonClick={doneButtonClick} />
          </div>
        ))}
      </ul>
    </div>
  )
};

export default List;