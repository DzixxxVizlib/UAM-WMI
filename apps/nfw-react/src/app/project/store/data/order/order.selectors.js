import { FEATURE_ORDER_NAME } from '../../constants';
import { selectDataState } from '../data.selectors';

export const selectOrderState = (state) =>
  selectDataState(state)[FEATURE_ORDER_NAME];
