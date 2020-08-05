import React from 'react';
import AboutCrypto from './components/AboutCrypto';
import HomePage from './components/HomePage';
import NavMenu from './components/NavMenu';
import SearchForm from './components/SearchForm';
import Footer from './components/Footer';
import './coinApp.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const CoinApp = () => {
  return (
    <body id="body">
      <Router>
        <NavMenu />
        <Switch>
          <Route exact path="/about" component={AboutCrypto} />
          <Route exact path="/search" component={SearchForm} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
      <Footer />
    </body>
  );
};

export default CoinApp;
