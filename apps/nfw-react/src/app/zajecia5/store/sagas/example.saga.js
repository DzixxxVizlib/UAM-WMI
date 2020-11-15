import { select, take } from 'redux-saga/effects';

// import some actions

export function* worker(action) {
  const state = yield select(s => s);
  console.log(`Action: ${action.type}`, action, state);
}

export function* watcher() {
  const action = yield take('TEST');
  yield worker(action); // do the hard stuff
}