import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { App } from './cmp/App';

export const Zajecia4 = props => {
  return (
    <Provider store={store}>
      <App id="10"/>
    </Provider>
  )
}
