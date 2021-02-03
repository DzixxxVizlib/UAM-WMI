import { FEATURE_SAUCE_NAME } from '../../constants';

// Small tip to decorate each action type prefixing by it's feature name
const decorateAT = (text) => `[${FEATURE_SAUCE_NAME}] ${text}`;

// Action Types
export const FETCH_SAUCES = decorateAT('Fetch sauces');
export const SET_SAUCES = decorateAT('Set sauces');
