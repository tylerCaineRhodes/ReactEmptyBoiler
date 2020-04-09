import {createStore, applyMiddleware} from 'redux';
import poop from 'redux-thunk';
import rootReducer from '../reducers/main.js';


let initialState = {
  todolist: ['make todo list', 'learn to code', 'make allthe monz']
};

export default createStore(
  rootReducer,
  initialState,
  applyMiddleware(poop)
);