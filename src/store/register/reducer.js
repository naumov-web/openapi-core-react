import Immutable from 'seamless-immutable';
import { SET_ERROR_MESSAGES } from './actionTypes';

// Initial state
const initialState = Immutable({
  error_messages: {}
});

// Reducer
export default function reduce(state = initialState, action = {}) {
  switch(action.type) {
    case SET_ERROR_MESSAGES:
      return state.merge({
        error_messages: action.error_messages,
      });
    default:
      return state;
  }
}

// Selectors
export function getErrorMessages(state) {
  return state.register.error_messages;
}