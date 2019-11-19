import { SET_PROFILE } from './actionTypes';

export const createSetProfileAction = (profile) => ({
  type: SET_PROFILE,
  profile
});