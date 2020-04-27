import React from 'react';
import ListItem from './ListItem';

function List(props){
  return (
    <div>
      <ul>
        {props.todolist.map((thing, i) => (
          <div key={i}>
            <ListItem todoitem={thing} doneButtonClick={props.doneButtonClick} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default List;