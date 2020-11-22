import { combineReducers } from 'redux';

import {
  FEATURE_INGREDIENT_NAME,
  FEATURE_PIZZA_NAME
} from '../constants';

import ingredientReducers from './ingredient/ingredient.reducers';
import pizzaReducers from './pizza/pizza.reducers'

export default combineReducers({
  [FEATURE_INGREDIENT_NAME]: ingredientReducers,
  [FEATURE_PIZZA_NAME]: pizzaReducers,
});
