import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Coin = () => {
  const [apiData, setApiData] = useState({});

  let { id } = useParams();
  

  useEffect(() => {
    console.log('I entered useEffect. Did it work?');

    axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((response) => {
        console.log(response.data.name);
        setApiData(response.data.name);
      });
  }, []);

  return (
    <Container>
      <h1>{apiData.name}</h1>
      <img
        alt="Placeholder"
        style={{ float: 'left', width: 300, marginBottom: 20, marginRight: 20 }}
        src={apiData.img.large}
      />
      <p>{apiData.ico_data.short_desc}</p>
    </Container>
  );
};

export default Coin;
