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
import leaveProfile from '../../../../../effects/account/profile/leaveProfile';
import loadProfile from '../../../../../effects/account/profile/loadProfile';
import updateProfile from '../../../../../effects/account/profile/updateProfile';
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
  },
  componentWillUnmount(){
    const { dispatch } = this.props;
    leaveProfile({ dispatch });
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