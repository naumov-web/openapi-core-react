// Redux methods
import { createSetProfileAction } from '../../store/profile/actionCreators';
// API methods
import { getProfile } from '../../utils/apis/profile.api';
import logoutUser from './logoutUser';

export default async ({ dispatch, history }) => {
  try {
    const data = await getProfile();
    dispatch(createSetProfileAction(data));
  } catch (e) {
    if (e.unauthorized) {
      logoutUser({ dispatch, history });
    }
  }
};