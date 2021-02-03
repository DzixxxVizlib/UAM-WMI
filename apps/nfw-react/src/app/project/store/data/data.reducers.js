import { combineReducers } from 'redux';

import {
  FEATURE_INGREDIENT_NAME,
  FEATURE_ORDER_NAME,
  FEATURE_PIZZA_NAME,
  FEATURE_SAUCE_NAME,
} from '../constants';

import ingredientReducers from './ingredient/ingredient.reducers';
import orderReducer from './order/order.reducers';
import pizzaReducers from './pizza/pizza.reducers';
import sauceReducers from './sauce/sauce.reducers';

export default combineReducers({
  [FEATURE_INGREDIENT_NAME]: ingredientReducers,
  [FEATURE_PIZZA_NAME]: pizzaReducers,
  [FEATURE_SAUCE_NAME]: sauceReducers,
  [FEATURE_ORDER_NAME]: orderReducer,
});
