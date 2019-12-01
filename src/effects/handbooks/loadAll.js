// Redux methods
import { createSetAllAction } from '../../store/handbooks/actionCreators';
// API methods
import { getAllHandbooks } from '../../utils/apis/handbooks.api';

export default async ({ dispatch }) => {
  try {
    const data = await getAllHandbooks();
    dispatch(createSetAllAction(data));
  // eslint-disable-next-line no-empty
  } catch (e) {}
};