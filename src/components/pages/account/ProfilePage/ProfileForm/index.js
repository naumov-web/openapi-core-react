import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
// Redux
import { getProfile } from '../../../../../store/profile/reducer';
// Effects
import loadProfile from '../../../../../effects/account/loadProfile';
// Components
import ProfileForm from './ProfileForm';

function mapStateToProps(state) {
  return {
    profile: getProfile(state)
  };
}

const withLifecycle = lifecycle({
  componentDidMount(){
    const { dispatch, history } = this.props;
    loadProfile({ dispatch, history });
  }
});

export default compose(
  connect(mapStateToProps),
  withRouter,
  withLifecycle
)(ProfileForm);