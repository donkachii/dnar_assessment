import React from "react";

const CoinItems = ({ coin }) => {
  return (
    <button className="coin-body my-4 mx-5">
      {coin.item.name} ({coin.item.symbol})
    </button>
  );
};

export default CoinItems;
