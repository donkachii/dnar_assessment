import React from "react";

const CoinItems = ({ coin }) => {
  return (
    <button className="coin-body my-4 mx-5">
      {coin.name} ({coin.symbol})
    </button>
  );
};

export default CoinItems;
