import { SET_ERROR_MESSAGES, SET_IS_LOADING } from './actionTypes';

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