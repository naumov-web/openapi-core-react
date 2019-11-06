import { SET_ERROR_MESSAGES, SET_IS_LOADING } from './actionTypes';

export const createSetErrorMessagesAction = (errorMessages) => ({
  type: SET_ERROR_MESSAGES,
  error_messages: errorMessages
});

export const createSetIsLoadingAction = (isLoading) => ({
  type: SET_IS_LOADING,
  is_loading: isLoading
});