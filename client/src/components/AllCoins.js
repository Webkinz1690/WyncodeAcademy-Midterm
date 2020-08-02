import React from 'react';
import { Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const AllCoins = (props) => {
  return (
    <Row>
      {console.log(props.symbol)}

      {/* {props
        ? props ((coin) => {
            console.log(coin);
            return (
              <Card
                variant="top"
                key={coin.name}
                style={{ width: 200, margin: 5 }}
              >
                <a href={`/coin/${coin.links.homepage}`}>
                  <Card.Img
                    variant="top"
                    src={coin.img.small}
                    alt={coin.name}
                    width={200}
                  />
                </a>
                <Card.Body>
                  <Card.Title>{coin.name}</Card.Title>
                </Card.Body>
              </Card>
            );
          })
        : 'Nothing found :('} */}
    </Row>
  );
};

export default AllCoins;
