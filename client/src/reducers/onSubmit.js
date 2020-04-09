const onSubmitReducer = (state = null, action) => {
  switch(action.type) {
    case 'SUBMIT_TASK':
      return [
        ...state, 
        {
          task: action.task
        }
      ];
    default:
      return state;
  }
}

export default onSubmitReducer;