// Redux methods
import { 
  createSetIsLoadingAction, 
  createSetSuccessMessageAction 
} from '../../store/profile/actionCreators';
// API methods
import { updateProfile } from '../../utils/apis/profile.api';

import logoutUser from './logoutUser';

// eslint-disable-next-line camelcase
import success_messages from '../../utils/success_messages';

export default async (payload, { dispatch, history }) => {
  try {
    dispatch(createSetIsLoadingAction(true));
    await updateProfile(payload);
    dispatch(createSetSuccessMessageAction(success_messages.update_profile_user));
    dispatch(createSetIsLoadingAction(false));
  } catch (e) {
    if (e.unauthorized) {
      logoutUser({ dispatch, history });
    }

    dispatch(createSetIsLoadingAction(false));
  }
};