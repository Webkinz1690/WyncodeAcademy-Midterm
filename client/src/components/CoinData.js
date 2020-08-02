import React from 'react';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

const CoinData = ({ price, marketCap, img, name, symbol }) => {
  return (
    <div className="shadow-box-example z-depth-5">
      <Card
        variant="top"
        border="dark"
        position="center"
        bg="dark"
        text="light"
        style={{ width: 250, margin: 5, shadow: 'lg' }}
        class="shadow-lg p-3 mb-5"
      >
        <Card.Img variant="top" src={img} alt={img} width={200} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <span>Symbol: </span>
          {symbol}
          <div>
            <span>Price: </span>${price}
          </div>
          <div>
            <span>Market Cap: </span>
            {marketCap}
            {/* <Button variant="light" position="end" size="sm">Graph</Button> */}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CoinData;
