import React from "react";
import "./coin.scss";
import CoinCard from "./CoinCard";

const CoinList = ({ coins }) => {
  return (
    <div className="coins flex flex-wrap">
      {coins.slice(0, 8).map((coin, i) => (
        <CoinCard coin={coin} key={i} />
      ))}
    </div>
  );
};

export default CoinList;
