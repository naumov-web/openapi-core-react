import { SET_IS_LOADING, SET_IS_LOGGED, SET_ERROR_MESSAGES } from './actionTypes';

export const createSetIsLoadingAction = (isLoading) => ({
  type: SET_IS_LOADING,
  is_loading: isLoading
});

export const createSetIsLoggedAction = (isLoading) => ({
  type: SET_IS_LOGGED,
  is_logged: isLoading
});

export const createSetErrorMessagesAction = (errorMessages) => ({
  type: SET_ERROR_MESSAGES,
  error_messages: errorMessages
});