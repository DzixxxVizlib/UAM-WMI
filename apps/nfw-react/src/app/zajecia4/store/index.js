import { createStore, combineReducers } from 'redux';
import { reducer as UIreducer } from './ui/reducer';

const reducers = {
  ui: UIreducer,
  data: () => null,
};

export const store = createStore(
  combineReducers(reducers),
  {}, // initial state
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // enabling access to devtools
)
