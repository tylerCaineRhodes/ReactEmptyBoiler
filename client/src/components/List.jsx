import React from 'react';
import ListItem from './ListItem';

const List = ({ todolist, setTodos }) => {

  const doneButtonClick = (e) => {
    let newStateList = todolist.filter((item) => {
      return item !== e.target.value
    })
    setTodos(newStateList)
  }

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
