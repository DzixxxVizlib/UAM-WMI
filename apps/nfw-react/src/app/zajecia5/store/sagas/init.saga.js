import { takeEvery, fork } from 'redux-saga/effects';

import * as pizzaAT from '../data/pizza/pizza.action-types';
import * as ingredientAT from '../data/ingredient/ingredient.action-types';

export function* worker(action) {
  console.log("Worker", action);

}

export function* watcher() {
  yield takeEvery([pizzaAT.FETCH_PIZZAS, ingredientAT.FETCH_INGREDIENTS], worker);
}