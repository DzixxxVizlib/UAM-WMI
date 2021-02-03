import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { App } from './cmp/App';
import './css/main.css';

export const Project = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
