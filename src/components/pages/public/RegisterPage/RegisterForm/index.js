import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { compose, withHandlers } from 'recompose';
// Redux
import { getIsLoading, getErrorMessages } from '../../../../../store/register/reducer';
// Effects
import registerUser from '../../../../../effects/auth/registerUser';
// Component
import RegisterForm from './RegisterForm';

function mapStateToProps(state) {
  return {
    isLoading: getIsLoading(state),
    serverErrors: getErrorMessages(state)
  };
}

const handlers = withHandlers({
  submitForm : (props) => (data) => {
    const { dispatch, history } = props;
    
    registerUser(data, {
      dispatch,
      history
    });
  }
});

export default compose(
  withRouter,
  connect(mapStateToProps),
  handlers
)(RegisterForm);