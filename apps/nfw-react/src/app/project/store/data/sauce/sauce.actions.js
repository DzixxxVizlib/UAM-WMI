import * as sauceAT from './sauce.action-types';

// Action Creators
export const setSauces = (value) => ({
  type: sauceAT.SET_SAUCES,
  payload: value,
});

// Actions (to be used by epic)
export const fetchSauces = {
  type: sauceAT.FETCH_SAUCES,
  endpoint: 'http://localhost:3333/api/sauce',
  onSuccess: setSauces,
};
