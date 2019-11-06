import { createSetIsLoadingAction } from '../../store/register/actionCreators';
import { postRegister } from '../../utils/apis/auth.api';

export default (dispatch, payload) => {
  dispatch(createSetIsLoadingAction(true));

  postRegister(payload);

  dispatch(createSetIsLoadingAction(false));
};