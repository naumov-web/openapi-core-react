import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
// Redux
import { getIsLoading, getItems, getCount, getPagination } from '../../../../../store/projects/reducer';
// Effects
import { 
  projectsLoadDefault, 
  projectsSetOffset 
} from '../../../../../effects/account/projects/loadProjects';
// Components
import ProjectsListPage from './ProjectsListPage';

function mapStateToProps(state) {
  const pagination = getPagination(state);

  return {
    isLoading: getIsLoading(state),
    items: getItems(state),
    count: getCount(state),
    state,
    ...pagination
  };
}

const withLifecycle = lifecycle({
  componentDidMount(){
    const { dispatch, history, state } = this.props;

    history.listen((location) => {
      const params = queryString.parse(location.search);

      projectsSetOffset(params.offset, { state, dispatch, history });
    });

    if (history.location.search) {
      const params = queryString.parse(history.location.search);
      if (params.offset) {
        projectsSetOffset(params.offset, { state, dispatch, history });
        return;
      }
    }

    projectsLoadDefault({ state, dispatch, history });
  }
});

export default compose(
  connect(mapStateToProps),
  withRouter,
  withLifecycle
)(ProjectsListPage);