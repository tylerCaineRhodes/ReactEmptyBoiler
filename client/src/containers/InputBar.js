import { connect } from 'react-redux';
import addTask from '../actions/addTask';
import InputBar from '../components/InputBar';


const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (task) => {
      dispatch(addTask(task));
    }
  };
};

const InputBarContainer = connect(null, mapDispatchToProps)(InputBar); 


export default InputBarContainer;