import { connect } from 'react-redux';
import List from '../components/List';
import deleteTask from '../actions/deleteTask';

const mapDispatchToProps = (dispatch) => {
  return {
    doneButtonClick: (task) => {
      dispatch(deleteTask(task));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    todolist: state.todolist
  }
}

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;