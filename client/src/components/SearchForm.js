import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import AllCoins from './AllCoins';
import axios from 'axios';


const SearchForm = () => {
  // states to keep track of:
  // the search term
  const [search, setSearch] = useState('Bitcoin');

  // the API results
  const [apiData, setApiData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('is this thing on?');

    // Take the value of the input box and set the search state
    // "searchbar" was the ID of the input bar when we displayed
    // in the JSX below.
    console.log(event.target.elements.searchbar.value);
    setSearch(event.target.elements.searchbar.value);
  };

 
  useEffect(() => {
    console.log('I entered useEffect. Did it work?');

    axios
      .get(`https://api.coingecko.com/api/v3/coins/${search}`)
      .then((response) => {
        console.log(response.data.id);
        setApiData(response.data.id);
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
      <AllCoins data={apiData} />
    </>
  );
};

export default SearchForm;
