import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import { signup, logout, login } from './actions/session_actions';
window.signup = signup;
window.logout = logout;
window.login = login;

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    window.store = configureStore();
    ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
