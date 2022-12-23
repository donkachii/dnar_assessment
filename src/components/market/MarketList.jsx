import React from "react";
import MarketCard from "./MarketCard";

const MarketList = ({ market }) => {
  return (
    <div className="coins flex flex-wrap">
      {market.slice(0, 8).map((mark, i) => (
        <MarketCard mark={mark} key={i} />
      ))}
    </div>
  );
};

export default MarketList;
