import {combineReducers} from 'redux';
import todolist from './todosReducer.js'; 

const rootReducer = combineReducers({
  todolist
});

export default rootReducer;