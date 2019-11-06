import { connect } from 'react-redux';
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
    errorMessages: getErrorMessages(state)
  };
}

const handlers = withHandlers({
  submitForm : (props) => (data) => {
    const { dispatch } = props;
    
    registerUser(dispatch, data);
  }
});

export default compose(
  connect(mapStateToProps),
  handlers
)(RegisterForm);