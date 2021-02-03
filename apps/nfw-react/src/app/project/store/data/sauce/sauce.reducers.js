import { combineReducers } from 'redux';
import * as sauceAT from './sauce.action-types';

const byId = (state = {}, action) => {
  switch (action.type) {
    case sauceAT.SET_SAUCES: {
      return action.payload.reduce(
        (accumulator, sauce) => ({
          ...accumulator,
          [sauce.id]: sauce,
        }),
        {}
      );
    }
    default: {
      return state;
    }
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case sauceAT.SET_SAUCES: {
      return action.payload.map((sauce) => sauce.id);
    }
    default: {
      return state;
    }
  }
};

export default combineReducers({
  allIds,
  byId,
});
