import * as ingredientAT from './ingredient.action-types';

// Actions
export const fetchIngredients = { type: ingredientAT.FETCH_INGREDIENTS };

// Action Creators
export const setIngredients = value => ({
  type: ingredientAT.SET_INGREDIENTS,
  payload: value,
});

// Thunks (coming soon!)