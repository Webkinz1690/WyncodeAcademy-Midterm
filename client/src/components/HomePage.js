import React from 'react';
import { useHistory } from 'react-router-dom';

import './HomePage.css';


const HomePage = () => {
  const history = useHistory();
  const handleNavigate = () => {
    history.push('/search');
  };
  return (
    <div id="all">
      <div>
        {' '}
        <h1>
          What is the value of <span id="spin"></span>?
        </h1>
      </div>
      <div>
        <h2>That's where Crypto App comes in.</h2>
        <h2>Search your currency.</h2>
      </div>
      <div id="buttonC">
        <p></p>

        <button id="buttonShow" onClick={handleNavigate}>
          Get Started
        </button>

      </div>
    </div>
  );
};
export default HomePage;
