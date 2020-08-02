import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import CoinData from './CoinData';

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
          img: response.data.image.large,
          link: response.data.links.homepage[0]
          // description: response.data.ico_data.short_desc
        });
      })
      .catch((error) => {
        console.log('an error happened', error);
        setError(true);
      });
  }, [search]);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Control
            id="searchbar"
            size="lg"
            type="text"
            placeholder="Bitcoin"
          ></Form.Control>
        </Form.Row>
      </Form>
      {error ? (
        <p>An error occured, try searching for a valid coin</p>
      ) : (
        <CoinData
          price={apiData.price}
          marketCap={apiData.marketCap}
          img={apiData.img}
          // description={apiData.description}
          name={apiData.name}
          link={apiData.link}
          symbol={apiData.symbol}
        />
      )}
    </>
  );
};
export default SearchForm;
