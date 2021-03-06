// Redux methods
import { createSetIsLoadingAction, createSetErrorMessagesAction } from '../../store/register/actionCreators';
import { createSetIsLoggedAction } from '../../store/auth/actionCreators';
// API methods
import { postRegister } from '../../utils/apis/auth.api';
// Utils methods
import { setToken } from '../../utils/local_storage/token';

export default async (payload, options) => {
  const { dispatch, history } = options;
  dispatch(createSetIsLoadingAction(true));

  try {
    const data = await postRegister(payload);
    dispatch(createSetErrorMessagesAction({}));
    setToken(data.token);
    dispatch(createSetIsLoggedAction(true));
    history.push('/account');
  } catch (e) {
    dispatch(createSetErrorMessagesAction(e.errors));
  }

  dispatch(createSetIsLoadingAction(false));
};