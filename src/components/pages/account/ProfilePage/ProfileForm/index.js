import { connect } from 'react-redux';
import { compose, lifecycle, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
// Redux
import { 
  getUser, 
  getIsLoading, 
  getErrorMessages, 
  getSuccessMessage 
} from '../../../../../store/profile/reducer';
// Effects
import loadProfile from '../../../../../effects/account/loadProfile';
import updateProfile from '../../../../../effects/account/updateProfile';
// Components
import ProfileForm from './ProfileForm';

function mapStateToProps(state) {
  return {
    profile: getUser(state),
    isLoading: getIsLoading(state),
    serverErrors: getErrorMessages(state),
    successMessage: getSuccessMessage(state)
  };
}

const withLifecycle = lifecycle({
  componentDidMount(){
    const { dispatch, history } = this.props;
    loadProfile({ dispatch, history });
  }
});

const handlers = withHandlers({
  submitForm : (props) => (data) => {
    const { dispatch, history } = props;
    
    updateProfile(data, {
      dispatch,
      history
    });
  }
});

export default compose(
  connect(mapStateToProps),
  withRouter,
  withLifecycle,
  handlers
)(ProfileForm);