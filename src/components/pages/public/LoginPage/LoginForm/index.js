import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, withHandlers } from 'recompose';
// Redux
import { getIsLoading, getErrorMessages } from '../../../../../store/auth/reducer';
// Effects
import loginUser from '../../../../../effects/auth/loginUser';
// Component
import LoginForm from './LoginForm';

function mapStateToProps(state) {
  return {
    isLoading: getIsLoading(state),
    serverErrors: getErrorMessages(state)
  };
}

const handlers = withHandlers({
  submitForm : (props) => (data) => {
    const { dispatch, history } = props;
    
    loginUser(data, {
      dispatch,
      history
    });
  }
});

export default compose(
  withRouter,
  connect(mapStateToProps),
  handlers
)(LoginForm);