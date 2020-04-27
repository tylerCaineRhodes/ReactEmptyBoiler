import React from 'react';
import ListItem from './ListItem';

const List = ({ todolist, deleteTask, updateTask, getToDos }) => (
  <div className='list'>
    <ul>
      {todolist.map((thing, i) => (
        <div key={i}>
          <ListItem 
            id={thing._id} 
            todoitem={thing.task} 
            deleteTask={deleteTask} 
            updateTask={updateTask} 
            getToDos={getToDos} 
          />
        </div>
      ))}
    </ul>
  </div>
);

export default List;