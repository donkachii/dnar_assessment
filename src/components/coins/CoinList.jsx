import React from "react";
import "./coin.scss";
import CoinCard from "./CoinCard";

const CoinList = ({ coins }) => {
  return (
    <div className="coins flex flex-wrap">
      {coins.loading && <div>Loading...</div>}
      {!coins.loading && coins.error ? <div> Error: {coins.error}</div> : null}
      {!coins.loading && coins.coinItems.length != 0
        ? coins.coinItems
            .slice(0, 8)
            .map((coin, i) => <CoinCard coin={coin} key={i} />)
        : null}
    </div>
  );
};

export default CoinList;
