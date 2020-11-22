import { combineReducers } from 'redux';
import * as ingredientAT from './ingredient.action-types';

const byId = (state = {}, action) => {
  switch (action.type) {
    case ingredientAT.SET_INGREDIENTS: {
      return action.payload
        .reduce((accumulator, ingredient) => ({
          ...accumulator,
          [ingredient.id]: ingredient
        }), {});
    }
    default: {
      return state;
    }
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
    case ingredientAT.SET_INGREDIENTS: {
      return action.payload
        .map(ingredient => ingredient.id);
    }
    default: {
      return state;
    }
  }
}

export default combineReducers({
  allIds,
  byId,
});
