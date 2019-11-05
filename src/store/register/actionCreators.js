import { SET_ERROR_MESSAGES } from './actionTypes';

export const createSetErrorMessagesAction = (errorMessages) => ({
  type: SET_ERROR_MESSAGES,
  error_messages: errorMessages
});