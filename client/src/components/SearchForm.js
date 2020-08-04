import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import CoinData from './CoinData';
import Jumbotron from 'react-bootstrap/Jumbotron';
import '../SearchForm.css';

const SearchForm = () => {
  // states to keep track of:
  // the search term
  const [search, setSearch] = useState('ethereum');
  // the API results
  const [apiData, setApiData] = useState([]);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Take the value of the input box and set the search state
    // "searchbar" was the ID of the input bar when we displayed
    // in the JSX below.
    // console.log(event.target.elements.searchbar.value);
    setSearch(event.target.elements.searchbar.value);
  };

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${search}`)
      .then((response) => {
        console.log(response.data.market_data.current_price.usd);
        setError(false);
        setApiData({
          name: response.data.name,
          symbol: response.data.symbol,
          price: response.data.market_data.current_price.usd,
          marketCap: response.data.market_data.market_cap.usd,
          img: response.data.image.small
        });
      })
      .catch((error) => {
        console.log('an error happened', error);
        setError(true);
      });
  }, [search]);

  return (
    <div style={{ backgroundColor: 'black', height: '100vh' }}>
      <Form
        onSubmit={handleSubmit}
        id="mainsearchbar"
        className="mt-2 pt-3 d-flex"
      >
        <Form.Row>
          <Form.Control
            id="searchbar"
            size="lg"
            type="text"
            placeholder="Search"
          ></Form.Control>
        </Form.Row>
      </Form>
      {error ? (
        <Jumbotron className="mt-5 jb" style={{ backgroundColor: '#4caf50' }}>
          <h1 id="h1" style={{ color: 'white' }}>
            Coin Not Found <span>👻</span>
          </h1>
          <p style={{ color: 'white' }}>
            Coin not valid! Try searching again with the proper name...
          </p>
        </Jumbotron>
      ) : (
        <CoinData
          price={apiData.price}
          marketCap={apiData.marketCap}
          img={apiData.img}
          // description={apiData.description}
          name={apiData.name}
          symbol={apiData.symbol}
        />
      )}
    </div>
  );
};
export default SearchForm;
