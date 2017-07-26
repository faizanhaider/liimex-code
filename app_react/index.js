/**
 * Client entry point
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';

import App from './App';
import * as auth from './utils/auth';
import { loginSuccess, login } from './actions'
import { configureStore } from './store/configureStore';

import 'toastr/toastr.scss';
// Initialize store
const store = configureStore(window.__INITIAL_STATE);

store.dispatch(loginSuccess({toke: null, user: {}}))
store.dispatch(login());

const mountApp = document.getElementById('root');

render(
  <App store={store} />,
  mountApp
);