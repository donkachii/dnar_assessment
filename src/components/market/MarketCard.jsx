import React from "react";

const MarketCard = ({ mark }) => {
  return (
    <button className="coin-body w-full my-4 mr-5 py-6 flex justify-between px-2">
      <div>
        {mark.name} ({mark.market})
      </div>
      <div>
        <h2>{mark.last}</h2>
      </div>
    </button>
  );
};

export default MarketCard;
