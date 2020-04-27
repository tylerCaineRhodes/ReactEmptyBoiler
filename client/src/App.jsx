import React from 'react';
// import store from './store/store';
import ListContainer from './containers/List';
import InputBarContainer from './containers/InputBar';

const App = () => {
  // console.log(store.getState());
  return (
    <div>
      <h1>toDo list thing</h1>
      <InputBarContainer />
      <ListContainer />
    </div>
  );
};

export default App;