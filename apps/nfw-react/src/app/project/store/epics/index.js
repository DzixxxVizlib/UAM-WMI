import { combineEpics } from 'redux-observable';

import { epic as initEpic } from './init.epic';

export const rootEpic = combineEpics(
  initEpic,
);