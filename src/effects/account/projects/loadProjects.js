// Redux methods
import { getPagination } from '../../../store/projects/reducer';
import { 
  createSetIsLoadingAction, 
  createSetItemsAction, 
  createSetCountAction 
} from '../../../store/projects/actionCreators';
// API methods
import { getProjects } from '../../../utils/apis/projects.api';
// Effects
import logoutUser from '../logoutUser';
import { mergeRecursive } from '../../../utils/merge_objects';

// eslint-disable-next-line camelcase
export const projectsSortBy = (sort_column, sort_direction, { state, dispatch, history }) => {
  const params = getPagination(state);

  loadProjects(
    mergeRecursive(params, {sort_column, sort_direction}), 
    { dispatch, history }
  );
};

export const projectsSetOffset = (offset, { state, dispatch, history }) => {
  const params = getPagination(state);

  loadProjects(
    mergeRecursive(params, {offset}), 
    { dispatch, history }
  );
};

export const projectsLoadDefault = async ({ state, dispatch, history }) => {
  const params = getPagination(state);

  await loadProjects(
    params, 
    { dispatch, history }
  );
};

// eslint-disable-next-line camelcase
const loadProjects = async ({ limit, offset, sort_by, sort_direction }, { dispatch, history }) => {
  dispatch(createSetIsLoadingAction(true));

  try {
    const data = await getProjects({ limit, offset, sort_by, sort_direction });
    dispatch(createSetItemsAction(data.items));
    dispatch(createSetCountAction(data.count));
  } catch (e) {
    if (e.unauthorized) {
      logoutUser({ dispatch, history });
    }
  }
  dispatch(createSetIsLoadingAction(false));
};