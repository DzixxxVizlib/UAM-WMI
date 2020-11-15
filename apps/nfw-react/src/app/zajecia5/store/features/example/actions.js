import { Action } from 'rxjs/internal/scheduler/Action';
import * as ActionTypes from './action-types';

// Actions
export const testAction = { type: ActionTypes.TEST_ACTION };

// Action Creators
export const anotherAction = value => ({
  type: ActionTypes.ANOTHER_ACTION,
  payload: value,
});
