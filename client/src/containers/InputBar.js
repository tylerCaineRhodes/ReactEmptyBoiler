import { connect } from 'react-redux';
import addTask from '../actions/addTask';//different alias here?
import InputBar from '../components/InputBar';


const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (task) => {
      dispatch(addTask(task));
    }
  };
};

const InputBarContainer = connect(null, mapDispatchToProps)(InputBar); //search container is written strangely


export default InputBarContainer;