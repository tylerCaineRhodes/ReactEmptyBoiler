import {combineReducers} from 'redux';
import todolist from './todosReducer.js'; //check naming params
 //check naming params
const rootReducer = combineReducers({
  todolist
});

export default rootReducer;