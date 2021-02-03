import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createEpicMiddleware } from 'redux-observable';
import { rootSaga } from './sagas';
import { rootEpic } from './epics';
import rootReducer from './root.reducer';

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

const defaultState = {};

export const store = createStore(
  rootReducer,
  defaultState,
  enhancers
);

saga.run(rootSaga);
epic.run(rootEpic);

