// Redux methods
import { 
  createSetIsLoadingAction, 
  createSetErrorMessagesAction 
} from '../../../store/projects/actionCreators';
// API methods
import { createProject } from '../../../utils/apis/projects.api';
import logoutUser from '../logoutUser';

export default async (payload, { dispatch, history }) => {
  try {
    dispatch(createSetIsLoadingAction(true));
    await createProject(payload);
    dispatch(createSetIsLoadingAction(false));
    history.push('/projects');
  } catch (e) {
    if (e.unauthorized) {
      logoutUser({ dispatch, history });
    } else {
      dispatch(createSetErrorMessagesAction(e.errors));
      dispatch(createSetIsLoadingAction(false));
    }
  }
}