import * as pizzaAT from './pizza.action-types';

// Action Creators
export const setPizzas = value => ({
  type: pizzaAT.SET_PIZZAS,
  payload: value,
});

// Actions (to be used by epic)
export const fetchPizzas = {
  type: pizzaAT.FETCH_PIZZAS,
  endpoint: 'http://localhost:3333/api/pizza',
  onSuccess: setPizzas
};