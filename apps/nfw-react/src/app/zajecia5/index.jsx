import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './cmp/App.cmp';

export const Zajecia5 = props => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
