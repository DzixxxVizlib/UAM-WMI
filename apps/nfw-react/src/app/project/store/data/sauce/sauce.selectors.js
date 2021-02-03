import { FEATURE_SAUCE_NAME } from '../../constants';
import { selectDataState } from '../data.selectors';

const selectSauceState = (state) => selectDataState(state)[FEATURE_SAUCE_NAME];

export const selectSaucesById = (state) => selectSauceState(state).byId;
export const selectSaucesAllIds = (state) => selectSauceState(state).allIds;
