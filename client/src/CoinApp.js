import React from 'react';
import Container from 'react-bootstrap/Container';
import Coin from './components/Coin';
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
          <Route path="/search" component={SearchForm} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Container>
    </Router>
  );
};

export default CoinApp;
