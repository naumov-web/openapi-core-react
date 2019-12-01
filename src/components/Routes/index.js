import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
// Effects
import loadAllHandbooks from '../../effects/handbooks/loadAll';
// Components
import Routes from './Routes';

// eslint-disable-next-line no-unused-vars
function mapStateToProps(state) {
  return {};
}

const withLifecycle = lifecycle({
  componentDidMount(){
    const { dispatch } = this.props;
    loadAllHandbooks({ dispatch });
  }
});

export default compose(
  connect(mapStateToProps),
  withRouter,
  withLifecycle
)(Routes);