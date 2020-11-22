import { all } from 'redux-saga/effects';

import { watcher as initWatcher } from './init.saga';

// single entry point to start all sagas at once
export function* rootSaga() {
    yield all([
      initWatcher(),
      // other watchers goes here!
    ])
  }