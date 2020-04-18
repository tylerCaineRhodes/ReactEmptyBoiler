import React from 'react';
import ListItem from './ListItem';

function List({todolist, doneButtonClick}){
  return (
    <div>
      <ul>
        {todolist.map((thing) => (
          <div key={thing.id}>
            <ListItem todoitem={thing.task} doneButtonClick={doneButtonClick} />
          </div>
        ))}
      </ul>
    </div>
  )

};

export default List;