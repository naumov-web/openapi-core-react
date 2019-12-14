import Immutable from 'seamless-immutable';
import { SET_ERROR_MESSAGES, SET_IS_LOADING } from './actionTypes';

// Initial state
const initialState = Immutable({
  error_messages: {},
  is_loading: false
});

// Reducer
export default function reduce(state = initialState, action = {}) {
  switch(action.type) {
    case SET_ERROR_MESSAGES:
      return state.merge({
        error_messages: action.error_messages
      });
    case SET_IS_LOADING:
      return state.merge({
        is_loading: action.is_loading
      });
    default:
      return state;
  }
}

// Selectors
export const getIsLoading = (state) => state.projects.is_loading

export const getErrorMessages = (state) => state.projects.error_messages;