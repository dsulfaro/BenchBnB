import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div id="app">
    <h1>BenchBnB</h1>
    <GreetingContainer />
    {children}
  </div>
);

export default App;
