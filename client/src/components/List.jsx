import React from 'react';
import ListItem from './ListItem';

function List({todolist, deleteTask}){
  return (
    <div>
      <ul>
        {todolist.map((thing, i) => (
          <div key={i}>
            <ListItem id={thing.id} todoitem={thing.task} deleteTask={deleteTask} />
          </div>
        ))}
      </ul>
    </div>
  )
};

export default List;