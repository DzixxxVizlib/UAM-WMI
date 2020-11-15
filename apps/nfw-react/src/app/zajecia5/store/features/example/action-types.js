import { FEATURE_NAME } from './constants';

const decorateAT = text => `[${FEATURE_NAME}] ${text}`;

// Action Types!
export const TEST_ACTION = decorateAT('Test Action');
export const ANOTHER_ACTION = decorateAT('Another Action');
