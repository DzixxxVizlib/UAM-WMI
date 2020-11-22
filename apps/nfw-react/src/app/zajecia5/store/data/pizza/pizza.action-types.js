import { FEATURE_PIZZA_NAME } from '../../constants';

// Small tip to decorate each action type prefixing by it's feature name 
const decorateAT = text => `[${FEATURE_PIZZA_NAME}] ${text}`;

// Action Types
export const FETCH_PIZZAS = decorateAT('Fetch pizzas');
export const SET_PIZZAS = decorateAT('Set pizzas');

