import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { useHistory } from 'react-router-dom';

const NavMenu = () => {
  return (
    <Nav
      style={{ backgroundColor: 'black' }}
      defaultActiveKey="/home"
      as="ul"
      className="justify-content-left"
    >
      <>
        <Nav.Item as="li">
          <Nav.Link style={{ color: '#00FF7F' }} href="/">
            <strong>Crypto App</strong>
          </Nav.Link>
        </Nav.Item>
      </>
      <Nav.Item as="li">
        <Nav.Link
          className="links"
          style={{ color: '#fff' }}
          href="/search"
          eventKey="link-1"
        >
          Coins
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link
          className="links"
          style={{ color: '#fff' }}
          href="/about"
          eventKey="link-2"
        >
          About Crypto
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavMenu;
