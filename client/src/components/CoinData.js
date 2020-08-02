import React from 'react';
import format from 'number-formatter';
import Card from 'react-bootstrap/Card';

const CoinData = ({ price, marketCap, img, name, symbol }) => {
  return (
    <>
      <Card
        variant="top"
        border="dark"
        bg="dark"
        text="light"
        style={{ width: 200, margin: 5 }}
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
        </Card.Body>
      </Card>
    </>
  );
};
export default CoinData;
