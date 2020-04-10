import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/main.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


let initialState = {
  todolist: ['make todo list', 'learn to code', 'make allthe monz']
};

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);
  


export default store;