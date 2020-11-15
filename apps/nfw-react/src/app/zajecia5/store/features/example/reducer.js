import * as ActionTypes from './action-types';

const initialState = {
  value: 0,
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.TEST_ACTION: {
      return Object.assign({}, state, { value: 1 });
    }
    case ActionTypes.ANOTHER_ACTION: {
      return Object.assign({}, state, { value: action.payload });
    }
    default: {
      return state;
    }
  }
}