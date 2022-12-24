import React from "react";
import MarketCard from "./MarketCard";

const MarketList = ({ market }) => {
  return (
    <div className="coins flex flex-wrap">
      {market.loading && <div>Loading...</div>}
      {!market.loading && market.error ? (
        <div> Error: {market.error}</div>
      ) : null}
      {!market.loading && market.market.length != 0
        ? market.market
            .slice(0, 8)
            .map((mark, i) => <MarketCard mark={mark} key={i} />)
        : null}
    </div>
  );
};

export default MarketList;
