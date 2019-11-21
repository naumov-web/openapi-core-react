import Immutable from 'seamless-immutable';
import { SET_USER, SET_SUCCESS_MESSAGE, SET_ERROR_MESSAGES, SET_IS_LOADING } from './actionTypes';

// Initial state
const initialState = Immutable({
  user: {
    email: ''
  },
  success_message: null,
  error_messages: {},
  is_loading: false
});

// Reducer
export default function reduce(state = initialState, action = {}) {
  switch(action.type) {
    case SET_USER:
      return state.merge({
        user: action.user
      });
    case SET_SUCCESS_MESSAGE:
      return state.merge({
        success_message: action.success_message
      });
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
export const getUser = (state) => state.profile.user;

export const getIsLoading = (state) => state.profile.is_loading;

export const getSuccessMessage = (state) => state.profile.success_message;

export const getErrorMessages = (state) => state.profile.error_messages;