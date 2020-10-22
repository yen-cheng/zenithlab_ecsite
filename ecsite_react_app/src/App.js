import React from 'react';
import {Route} from 'react-router-dom';

import './App.css';
import HomePage from './pages/home-page';
import LoginPage from './pages/login-page';
import AnnouncePage from './pages/announce-page';
import OrderManagePage from './pages/order-manage-page';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/announce" component={AnnouncePage} />
      <Route exact path="/ordermanage" component={OrderManagePage} />
    </div>
  );
}

export default App;
