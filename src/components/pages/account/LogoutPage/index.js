import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
// Component
import LogoutPage from './LogoutPage';

import logoutUser from '../../../../effects/account/logoutUser';

function mapStateToProps(state) {
  return {};
}

const withLifecycle = lifecycle({
  componentDidMount() {
    const { dispatch, history } = this.props;
    logoutUser({ dispatch, history });
  }
});

export default compose(
  withRouter,
  connect(mapStateToProps),
  withLifecycle
)(LogoutPage);