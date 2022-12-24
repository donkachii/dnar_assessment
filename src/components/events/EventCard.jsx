import React from "react";

const EventCard = ({ trending }) => {
  return (
    <button className="coin-body my-4 mx-5">
      <div className="mb-3">{trending.name}</div>
      <div className="">{trending.content || null}</div>
    </button>
  );
};

export default EventCard;
