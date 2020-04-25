import React from 'react';
import ListItem from './ListItem';

const List = ({todolist, deleteTask}) => (
  <div>
    <ul>
      {todolist.map((thing, i) => (
        <div key={i}>
          <ListItem id={thing._id} todoitem={thing.task} deleteTask={deleteTask} />
        </div>
      ))}
    </ul>
  </div>
);

export default List;