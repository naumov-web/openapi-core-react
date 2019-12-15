import Immutable from 'seamless-immutable';
import { SET_ERROR_MESSAGES, SET_IS_LOADING, SET_ITEMS, SET_OFFSET, SET_SORTING } from './actionTypes';
import { defaultLimit, defaultOffset, defaultSortBy, defaultSortDirection } from '../../config/pagination';

// Initial state
const initialState = Immutable({
  error_messages: {},
  items: [],
  limit: defaultLimit,
  offset: defaultOffset,
  sort_by: defaultSortBy,
  sort_direction: defaultSortDirection,
  is_loading: false
});

// Reducer
export default function reduce(state = initialState, action = {}) {
  switch(action.type) {
    case SET_ITEMS:
      return state.merge({
        items: action.items
      });
    case SET_OFFSET:
      return state.merge({
        offset: action.offset
      });
    case SET_SORTING:
      return state.merge({
        sort_by: action.sort_by,
        sort_direction: action.sort_direction
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
export const getIsLoading = (state) => state.projects.is_loading

export const getErrorMessages = (state) => state.projects.error_messages;

export const getItems = (state) => state.projects.items;

export const getPagination = (state) => ({
  limit: state.projects.limit,
  offset: state.projects.offset,
  sort_by: state.projects.sort_by,
  sort_direction: state.projects.sort_direction,
});