import { createStore, combineReducers } from 'redux';

const reducers = {
  ui: () => null,
  data: () => null,
};

export const store = createStore(
  combineReducers(reducers),
  {}, // initial state
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // enabling access to devtools
)
