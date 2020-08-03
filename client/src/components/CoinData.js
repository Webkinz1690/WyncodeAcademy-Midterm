import React from 'react';
import format from 'number-formatter';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'


const CoinData = ({ price, marketCap, img, name, symbol }) => {
  return (
    <div className="container">
      <Card className="card text-center"
        variant="top"
        border="dark"
        bg="dark"
        text="light"
        style={{ width: 400, margin: 5 }}
      >
        <Card.Img variant="top" src={img} alt={img} width={200} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <span>Symbol: </span>
          {symbol}
          <div>
            <span>Price: </span>${format('#,##0.####', price)}
          </div>
          <div>
            <span>Market Cap: </span>
            {format('#,##0.####', marketCap)}
          </div>
          <div>
          <a href="#" className="btn btn-primary">See Graph</a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CoinData;
