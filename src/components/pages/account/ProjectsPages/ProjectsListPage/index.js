import { connect } from 'react-redux';
import { compose, lifecycle, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
// Redux
import { getIsLoading, getItems, getCount, getPagination } from '../../../../../store/projects/reducer';
// Effects
import { 
  projectsLoadDefault, 
  projectsSetPagination 
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

const onChangePagination = (
  // eslint-disable-next-line camelcase
  { limit, offset, sort_by, sort_direction }, 
  { dispatch, history, state }
) => {

  projectsSetPagination(
    { limit, offset, sort_by, sort_direction },
    { dispatch, history, state }
  );
};

const handlers = withHandlers({
  // eslint-disable-next-line camelcase
  onChangePage: ({ dispatch, history, state }) => ({ offset }) => {
    onChangePagination(
      { offset }, 
      { dispatch, history, state }
    );
  },
  // eslint-disable-next-line camelcase
  onChangeSorting: ({ dispatch, history, state }) => ({ sort_by, sort_direction }) => {
    onChangePagination(
      { sort_by, sort_direction }, 
      { dispatch, history, state }
    );
  }
});

const withLifecycle = lifecycle({
  componentDidMount(){
    const { dispatch, history, state } = this.props;

    if (history.location.search) {
      const params = queryString.parse(history.location.search);
      
      projectsSetPagination(params, { state, dispatch, history });
    }

    projectsLoadDefault({ state, dispatch, history });
  }
});

export default compose(
  connect(mapStateToProps),
  withRouter,
  handlers,
  withLifecycle
)(ProjectsListPage);