import { all } from 'redux-saga/effects';

import { watcher as exampleWatcher } from './example.saga';

// single entry point to start all sagas at once
export function* rootSaga() {
    yield all([
      exampleWatcher(),
      // other watchers goes here!
    ])
  }