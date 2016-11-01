import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root.jsx';
import { requestBenches } from './actions/bench_actions';

// ---- For Testing --- //
import { signup, logout, login } from './actions/session_actions';
window.signup = signup;
window.logout = logout;
window.login = login;
window.requestBenches = requestBenches;

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
  }
  else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  window.store = store;
  ReactDOM.render(<Root store={store} />, root);
});
