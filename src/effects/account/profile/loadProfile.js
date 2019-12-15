// Redux methods
import { createSetUserAction } from '../../../store/profile/actionCreators';
// API methods
import { getProfile } from '../../../utils/apis/profile.api';
import logoutUser from '../logoutUser';

export default async ({ dispatch, history }) => {
  try {
    const data = await getProfile();
    dispatch(createSetUserAction(data));
  } catch (e) {
    if (e.unauthorized) {
      logoutUser({ dispatch, history });
    }
  }
};