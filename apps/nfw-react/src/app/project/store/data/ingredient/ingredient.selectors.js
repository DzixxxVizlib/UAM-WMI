import { FEATURE_INGREDIENT_NAME } from '../../constants';
import { selectDataState } from '../data.selectors';

const selectIngredientState = (state) =>
  selectDataState(state)[FEATURE_INGREDIENT_NAME];

export const selectIngredientsById = (state) =>
  selectIngredientState(state).byId;
export const selectIngredientsAllIds = (state) =>
  selectIngredientState(state).allIds;
