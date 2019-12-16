import { 
  SET_ERROR_MESSAGES, 
  SET_IS_LOADING, 
  SET_ITEMS, 
  SET_OFFSET, 
  SET_SORTING, 
  SET_COUNT 
} from './actionTypes';

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

export const createSetItemsAction = (items) => ({
  type: SET_ITEMS,
  items
});

export const createSetCountAction = (count) => ({
  type: SET_COUNT,
  count
});

export const createSetOffsetAction = (offset) => ({
  type: SET_OFFSET,
  offset
});

// eslint-disable-next-line camelcase
export const createSetSortingAction = (sort_by, sort_direction) => ({
  type: SET_SORTING,
  sort_by,
  sort_direction
});