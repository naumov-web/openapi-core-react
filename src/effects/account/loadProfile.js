import { getProfile } from '../../utils/apis/profile.api';
import logoutUser from './logoutUser';

export default async ({ dispatch, history }) => {
  try {
    const data = await getProfile();
    
  } catch (e) {
    if (e.unauthorized) {
      logoutUser({ dispatch, history });
    }
  }
};