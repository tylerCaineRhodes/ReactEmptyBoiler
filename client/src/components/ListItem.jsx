import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const ListItem = ({todoitem, deleteTask, id, getToDos}) =>  {

  const [isUpdating, toggleUpdate] = useState(false);
  const [input, changeInput] = useState('');

  const handleChange = (event) => {
    changeInput(event.target.value);
  };

  const updateTask = (id, task) => {
    Axios.put('/tasks', { id, task })
      .then(() => {
        toggleUpdate(false)
        changeInput('');
      })
      .then(() => {
        getToDos();
      })
      .catch(err => console.log('from axios', err));
  };

  return (
    <div className ='listItem' key={id}>
      <ul>
        {todoitem}
        {isUpdating && (
          <>
          <input placeholder="update task" value={input} onChange={handleChange} />
          <button onClick={() => updateTask(id, input)}>update</button>
          </>
        )}
      </ul>
      <button onClick={() => toggleUpdate(!isUpdating)}>{isUpdating ? 'cancel': 'update'}</button>
      <button onClick={() => deleteTask(id)}>Delete</button>
    </div>
  );
};

export default ListItem;
