import React from 'react';
import Container from 'react-bootstrap/Container';
import AboutCrypto from './components/AboutCrypto';
import HomePage from './components/HomePage';
import NavMenu from './components/NavMenu';
import SearchForm from './components/SearchForm';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const CoinApp = () => {
  return (
    <Router>
      <NavMenu />
      <Container>
        <Switch>
          <Route path="/about" component={AboutCrypto} />
          <Route path="/search" component={SearchForm} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Container>
    </Router>
  );
};

export default CoinApp;
