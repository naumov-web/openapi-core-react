import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
// Redux
import { getFormats } from '../../../../../../store/handbooks/reducer';
import { 
  getIsLoading, 
  getErrorMessages
} from '../../../../../../store/projects/reducer';
// Effects
import createProject from '../../../../../../effects/account/projects/createProject';
// Components
import ProjectForm from './ProjectForm';

function mapStateToProps(state) {
  return {
    formats: getFormats(state),
    isLoading: getIsLoading(state),
    serverErrors: getErrorMessages(state)
  };
}

const handlers = withHandlers({
  submitForm : (props) => (data) => {
    const { dispatch, history } = props;
    
    createProject(data, {
      dispatch,
      history
    });
  }
});

export default compose(
  connect(mapStateToProps),
  withRouter,
  handlers
)(ProjectForm);