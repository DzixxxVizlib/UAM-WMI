import actionTypes from './action-types';

const initialState = {
  a: 0,
  c: 2,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EXAMPLE_A: {
      return Object.assign({}, state, { a: 5 });
    }
    case actionTypes.EXAMPLE_C: {
      return Object.assign({}, state, { c: action.payload })
    }
    default: {
      return state;
    }
  }
}
