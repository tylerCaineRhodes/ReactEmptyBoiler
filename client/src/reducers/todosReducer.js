const todosReducer = (state = null, action) => {
  switch(action.type) {
    case 'SUBMIT_TASK':
      return [
        ...state, action.task
      ];
    case 'DELETE_TASK':
      return state.filter((item) => (
        item !== action.task
      ));

    default:
      return state;
  }
}
export default todosReducer;