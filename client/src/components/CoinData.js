import React from 'react';
import format from 'number-formatter';
import '../CoinData.css';

const CoinData = ({ price, marketCap, img, name, symbol }) => {
  return (
    <div id="bg">
      <div id="border">
        <div id="coin">
          <img src={img} className="pr-3" alt={img} />
          <span className="pb-3 pl-3" id="coinT" className="name">
            {name}
          </span>
        </div>
        <span className="pt-3 name" style={{ textTransform: 'capitalize' }}>
          Symbol: {symbol}
        </span>
        <div>
          <span className="name">Price: ${format('#,##0.####', price)}</span>
        </div>
        <div>
          <span className="name">
            Market Cap: {format('#,##0.####', marketCap)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CoinData;
