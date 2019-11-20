import Immutable from 'seamless-immutable';
import { SET_IS_LOGGED, SET_IS_LOADING, SET_ERROR_MESSAGES } from './actionTypes';
import { getToken } from '../../utils/local_storage/token';

// Initial state
const initialState = Immutable({
  error_messages: {},
  is_logged: Boolean(getToken()),
  is_loading: false
});

// Reducer
export default function reduce(state = initialState, action = {}) {
  switch(action.type) {
    case SET_ERROR_MESSAGES:
      return state.merge({
        error_messages: action.error_messages,
      });
    case SET_IS_LOGGED:
      return state.merge({
        is_logged: action.is_logged,
      });
    case SET_IS_LOADING:
      return state.merge({
        is_loading: action.is_loading,
      });
    default:
      return state;
  }
}

// Selectors
export function getErrorMessages(state) {
  return state.auth.error_messages;
}

export function getIsLoading(state) {
  return state.auth.is_loading;
}

export function getIsLogged(state) {
  return state.auth.is_logged;
}