import {combineReducers} from 'redux';
import onSubmitTask from './onSubmit.js'; //check naming params
import deletedTask from './deleteTask.js'; //check naming params

const rootReducer = combineReducers({
  onSubmitTask,
  deletedTask
});

export default rootReducer;