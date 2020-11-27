import { combineReducers } from 'redux';
import * as pizzaAT from './pizza.action-types';

const byId = (state = {}, action) => {
  switch (action.type) {
    case pizzaAT.SET_PIZZAS: {
      return action.payload
        .reduce((accumulator, pizza) => ({
          ...accumulator,
          [pizza.id]: pizza
        }), {});
    }
    default: {
      return state;
    }
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
    case pizzaAT.SET_PIZZAS: {
      return action.payload
        .map(pizza => pizza.id);
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
