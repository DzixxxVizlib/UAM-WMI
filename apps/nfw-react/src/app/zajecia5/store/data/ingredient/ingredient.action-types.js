import { FEATURE_INGREDIENT_NAME } from '../../constants';

// Small tip to decorate each action type prefixing by it's feature name 
const decorateAT = text => `[${FEATURE_INGREDIENT_NAME}] ${text}`;

// Action Types
export const FETCH_INGREDIENTS = decorateAT('Fetch ingredients');
export const SET_INGREDIENTS = decorateAT('Set ingredients');

