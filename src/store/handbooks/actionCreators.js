import { SET_ALL } from './actionTypes';

export const createSetAllAction = (handbooks) => ({
  type: SET_ALL,
  handbooks
});