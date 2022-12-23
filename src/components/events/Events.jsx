import React from "react";
import EventCard from "./EventCard";

const Events = ({ trendings }) => {
  return (
    <div className="coins flex flex-wrap">
      {trendings.coins.map((trending, i) => (
        <EventCard trending={trending} key={i} />
      ))}
    </div>
  );
};

export default Events;
