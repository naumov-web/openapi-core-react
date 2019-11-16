// Redux methods
import { createSetIsLoggedAction } from '../../store/auth/actionCreators';
// Utils methods
import { removeToken } from '../../utils/local_storage/token';

export default ({ dispatch, history }) => {
  removeToken();
  dispatch(createSetIsLoggedAction(false));
  history.push('/login');
};