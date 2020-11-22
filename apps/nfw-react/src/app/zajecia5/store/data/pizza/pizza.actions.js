import * as pizzaAT from './pizza.action-types';

// Actions
export const fetchPizzas = { type: pizzaAT.FETCH_PIZZAS };

// Action Creators
export const setPizzas = value => ({
  type: pizzaAT.SET_PIZZAS,
  payload: value,
});
