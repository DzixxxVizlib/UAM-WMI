import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createEpicMiddleware } from 'redux-observable';
import { rootSaga } from './sagas';
import { rootEpic } from './epics';

import { FEATURE_NAME as EXAMPLE_FEATURE_NAME } from './features/example/constants';
import { reducer as exampleReducer } from './features/example/reducer';

const reducers = {
  ui: combineReducers({
    [EXAMPLE_FEATURE_NAME]: exampleReducer,
  }),
  data: () => null,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const saga = createSagaMiddleware();
const epic = createEpicMiddleware();

const enhancers = composeEnhancers(
  applyMiddleware(...[
    thunk,
    saga,
    epic
  ])
);

export const store = createStore(
  combineReducers(reducers),
  {},
  enhancers
);

saga.run(rootSaga);
epic.run(rootEpic);

