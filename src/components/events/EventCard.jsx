import React from "react";

const EventCard = ({ trending }) => {
  return (
    <button className="coin-body my-4 mx-5">
      <div className="mb-3">{trending.item.name}</div>
      <div className="">price: {trending.item.price_btc}</div>
    </button>
  );
};

export default EventCard;
