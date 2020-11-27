import * as ingredientAT from './ingredient.action-types';

// Action Creators
export const setIngredients = value => ({
  type: ingredientAT.SET_INGREDIENTS,
  payload: value,
});

// Actions (to be used by epic)
export const fetchIngredients = {
  type: ingredientAT.FETCH_INGREDIENTS,
  endpoint: 'http://localhost:3333/api/ingredient',
  onSuccess: setIngredients
};

// Thunks 
// export const fetchIngredients = () => {
//   return (dispatch, getState) => {
//     return fetch('http://localhost:3333/api/ingredient')
//       .then(r => r.json())
//       .then(ingredients => {
//         dispatch(setIngredients(ingredients));
//       })
//   }
// }