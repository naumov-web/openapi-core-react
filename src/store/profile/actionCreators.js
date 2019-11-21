import { SET_USER, SET_SUCCESS_MESSAGE, SET_ERROR_MESSAGES, SET_IS_LOADING } from './actionTypes';

export const createSetUserAction = (user) => ({
  type: SET_USER,
  user
});

// eslint-disable-next-line camelcase
export const createSetIsLoadingAction = (is_loading) => ({
  type: SET_IS_LOADING,
  is_loading
});

// eslint-disable-next-line camelcase
export const createSetErrorMessagesAction = (error_messages) => ({
  type: SET_ERROR_MESSAGES,
  error_messages
});

// eslint-disable-next-line camelcase
export const createSetSuccessMessageAction = (success_message) => ({
  type: SET_SUCCESS_MESSAGE,
  success_message
});