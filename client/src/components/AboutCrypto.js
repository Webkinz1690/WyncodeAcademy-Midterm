import React from 'react';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import '../AboutCrypto.css';

const AboutCrypto = () => {
  return (
    <Container class="container-fluid">
      <div class="row align-items-center my-5">
        <div class="col-lg-5">
          <img
            class="img-fluid rounded mb-8 mb-lg-2"
            src="https://airbitz.co/media/business_images/servers.jpg"
            alt="Who, What and Where"
          />
        </div>
        <div class="col-lg-6">
          <h2 class="font-weight-light">
            <strong>Who, What and Where</strong>
          </h2>
          <p class="cryptotext">
            Cryptocurrency is an internet-based medium of exchange which uses
            cryptographical functions to conduct financial transactions.
            Cryptocurrencies leverage blockchain technology to gain
            decentralization, transparency, and immutability.
          </p>
          <Button
            className="button-aboutcrypto"
            href="https://en.wikipedia.org/wiki/Cryptocurrency"
            variant="dark"
            size="sm"
          >
            More Info
          </Button>{' '}
        </div>
      </div>
      <div class="row align-items-center my-5">
        <div class="col-lg-5">
          <img
            class="img-fluid rounded mb-8 mb-lg-2"
            src="https://www.quoteinspector.com/media/bitcoin/crypto-markets-lcd-wo.jpg"
            alt="New Developements"
          />
        </div>
        <div class="col-lg-6">
          <h2 class="font-weight-light">
            <strong>New Developements</strong>
          </h2>
          <p class="cryptotext">
            CryptoCurrencyNews is the go-to website for your cryptocurrency
            news. Covering crypto trends, coin price updates, and global
            regulatory laws you won't miss a beat in the crypto world.
          </p>
          <Button
            className="button-aboutcrypto"
            href="https://cryptocurrencynews.com/"
            variant="dark"
            size="sm"
          >
            More News
          </Button>{' '}
        </div>
      </div>
      <div class="row justify-content-center my-5">
        <div class="col-8">
          <div class="aboutText">
            <h4 class="font-weight-light">
              About <span class="h4title">CryptoAPP</span>
            </h4>
          </div>
          <p class="aboutText">
            CryptoAPP was built by three Wyncode Students in 2020 as part of
            their midterm project. Borne out of their passion for innovative
            tehcnologies, CryptoAPP now has over 50,000 subscribers. Sonny
            Castro, Priscilla Standard and Ana Maria Souza have gone on to build
            several successful websites. Their portfolios can be viewed
            <a
              className="aboutcryptolink"
              href="http://www.quickmeme.com/img/82/82b7e005126fa45137aebf04b5ffb3676f0115a96ec36c14bb9a443cbf4c26ee.jpg"
            >
              {' '}
              HERE.
            </a>
          </p>
        </div>
      </div>
    </Container>
  );
};
export default AboutCrypto;
