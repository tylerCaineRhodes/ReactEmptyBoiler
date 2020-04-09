import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/main.js';


let initialState = {
  todolist: ['make todo list', 'learn to code', 'make allthe monz']
};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);

export default store;