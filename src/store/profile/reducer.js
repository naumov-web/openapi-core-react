import Immutable from 'seamless-immutable';

// Initial state
const initialState = Immutable({
  email: ''
});

// Reducer
export default function reduce(state = initialState, action = {}) {
  switch(action.type) {
    default:
      return state;
  }
}