import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {
  const [apiData, setApiData] = useState({});

  let { id } = useParams();

  useEffect(() => {
    console.log('I entered useEffect. Did it work?');

    axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((response) => {
        console.log(response.data.id);
        setApiData(response.name);
      });
  }, [id]);

  return <div>Home Page!</div>;
};

export default HomePage;
