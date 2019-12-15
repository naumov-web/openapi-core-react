// Redux methods
import { createSetSuccessMessageAction } from '../../../store/profile/actionCreators';

export default ({ dispatch }) => {
  dispatch(createSetSuccessMessageAction(null));
};