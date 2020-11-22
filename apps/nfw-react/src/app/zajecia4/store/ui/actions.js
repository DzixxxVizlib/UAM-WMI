import actionTypes from './action-types';

// Actions
const actionA = {
  type: actionTypes.EXAMPLE_A
};

// Actions Creators
const actionC = value => ({
  type: actionTypes.EXAMPLE_C,
  payload: value,
});


export const actions = {
  actionA,
};

export const actionCreators = {
  actionC,
};
