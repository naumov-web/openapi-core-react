// Redux methods
import { 
  createSetIsLoadingAction, 
  createSetErrorMessagesAction, 
  createSetIsLoggedAction 
} from '../../store/auth/actionCreators';
// API methods
import { postLogin } from '../../utils/apis/auth.api';
// Utils methods
import { setToken } from '../../utils/local_storage/token';

export default async (payload, { dispatch, history }) => {
  dispatch(createSetIsLoadingAction(true));
  try {
    const data = await postLogin(payload);
    dispatch(createSetErrorMessagesAction({}));
    setToken(data.token);
    dispatch(createSetIsLoggedAction(true));
    history.push('/account');
  } catch (e) {
    dispatch(createSetErrorMessagesAction(e.errors));
  }

  dispatch(createSetIsLoadingAction(false));
}