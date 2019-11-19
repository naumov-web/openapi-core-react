import Immutable from 'seamless-immutable';
import { SET_PROFILE } from './actionTypes';

// Initial state
const initialState = Immutable({
  email: ''
});

// Reducer
export default function reduce(state = initialState, action = {}) {
  switch(action.type) {
    case SET_PROFILE:
      return state.merge(action.profile);
    default:
      return state;
  }
}

export const getProfile = (state) => state.profile;