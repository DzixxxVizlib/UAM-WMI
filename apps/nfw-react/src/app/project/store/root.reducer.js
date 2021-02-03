import { combineReducers } from 'redux';
import { FEATURE_DATA_NAME } from './constants';
import dataReducers from './data/data.reducers'

export default combineReducers({
  [FEATURE_DATA_NAME]: dataReducers,
});
