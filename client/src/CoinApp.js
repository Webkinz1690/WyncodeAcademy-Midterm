import React from 'react';
import Container from 'react-bootstrap/Container';
import Coin from './components/Coin';
import SearchForm from './components/SearchForm';
import NavMenu from './components/NavMenu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const CoinApp = () => {
  return (
    <Router>
      <NavMenu />
      <Container>
        <Switch>
          <Route path="/coin/:id" component={Coin} />
          <Route path="/" component={SearchForm} />
        </Switch>
      </Container>
    </Router>
  );
};

export default CoinApp;
