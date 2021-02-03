import { takeEvery, fork, put, select } from 'redux-saga/effects';

import * as rootAT from '../root.action-types';
import { fetchIngredients } from '../data/ingredient/ingredient.actions';
import { fetchPizzas } from '../data/pizza/pizza.actions';
import { fetchSauces } from '../data/sauce/sauce.actions';

export function* worker(action) {
  // we can do smth with the action too!
  // we can get state, modify smth (just take a look at saga documentation)

  yield put(fetchIngredients);
  yield put(fetchPizzas);
  yield put(fetchSauces);
}

export function* watcher() {
  yield takeEvery([rootAT.INITIALIZE], worker);
}
