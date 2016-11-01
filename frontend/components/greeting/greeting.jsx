import React from 'react';
import { Link } from 'react-router';

const Greeting = ({ currentUser, logout }) => {
  if (currentUser){
    return (
      <div id="greeting-user">
        <h2>Hello, {currentUser.username}</h2>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }
  else {
    return (
      <div id="greeting-no-user">
        <Link to="/login">Login</Link>
        <br />
        <Link to="/signup">Signup</Link>
      </div>
    );
  }
};

export default Greeting;
