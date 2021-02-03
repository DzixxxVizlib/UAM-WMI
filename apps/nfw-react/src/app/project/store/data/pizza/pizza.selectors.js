import { FEATURE_PIZZA_NAME } from '../../constants';
import { selectDataState } from '../data.selectors';

const selectPizzaState = (state) => selectDataState(state)[FEATURE_PIZZA_NAME];

export const selectPizzasById = (state) => selectPizzaState(state).byId;
export const selectPizzasAllIds = (state) => selectPizzaState(state).allIds;
