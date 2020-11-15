import { combineEpics } from 'redux-observable';
import { epic as exampleEpic } from './example.epic';

export const rootEpic = combineEpics(
  exampleEpic,
);