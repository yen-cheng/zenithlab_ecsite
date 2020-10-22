import React from 'react';
import {Route} from 'react-router-dom';

import './App.css';
import Home from './pages/home';
import Login from './pages/login';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
    </div>
  );
}

export default App;
