import Immutable from 'seamless-immutable';
import { SET_ALL } from './actionTypes';

// Initial state
const initialState = Immutable({
  formats: []
});

// Reducer
export default function reduce(state = initialState, action = {}) {
  switch(action.type) {
    case SET_ALL:
      return state.merge(action.handbooks);
    default:
      return state;
  }
}

// Selectors
export function getFormats(state) {
  return state.handbooks.formats;
}