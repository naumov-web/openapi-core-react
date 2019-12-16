import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
// Redux
import { getIsLoading, getItems, getCount } from '../../../../../store/projects/reducer';
// Effects
import { projectsLoadDefault } from '../../../../../effects/account/projects/loadProjects';
// Components
import ProjectsListPage from './ProjectsListPage';

function mapStateToProps(state) {
  return {
    isLoading: getIsLoading(state),
    items: getItems(state),
    count: getCount(state),
    state
  };
}

const withLifecycle = lifecycle({
  componentDidMount(){
    const { dispatch, history, state } = this.props;

    projectsLoadDefault({ state, dispatch, history });
  }
});

export default compose(
  connect(mapStateToProps),
  withRouter,
  withLifecycle
)(ProjectsListPage);