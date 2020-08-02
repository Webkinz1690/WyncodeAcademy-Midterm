import React from 'react';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
  const history = useHistory();

  const handleNavigate = () => {
    history.push('/search');
  };

  return (
    <div>
      <h1>This is the home page</h1>
      <button onClick={handleNavigate}>Go to coin page</button>
    </div>
  );
};

export default HomePage;
