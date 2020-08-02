import React from 'react';
import Nav from 'react-bootstrap/Nav';

const NavMenu = () => {
  return (
    <Nav
      style={{ backgroundColor: 'black' }}
      defaultActiveKey="/home"
      as="ul"
      className="justify-content-start"
    >
      <Nav.Item as="li">
        <Nav.Link style={{ color: '#fff' }} href="/">
          <strong>Coin App</strong>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link style={{ color: '#fff' }} href="/search" eventKey="link-1">
          Coins
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link
          style={{ color: '#fff' }}
          href="/coinOfTheDay"
          eventKey="link-2"
        >
          Coin of Day
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavMenu;
