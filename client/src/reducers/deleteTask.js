import Redux from 'redux';

const deleteTaskReducer = (state = null, action) => {
  switch(action.type) {
    case 'DELETE_TASK':
      return state.filter((item) => (
        item !== action.task
      ));

    default:
      return state;
  }
}

export default deleteTaskReducer;