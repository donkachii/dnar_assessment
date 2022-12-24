import React from "react";
import EventCard from "./EventCard";

const Events = ({ trendings }) => {
  return (
    <div className="coins flex flex-wrap">
      {trendings.loading && <div>Loading...</div>}
      {!trendings.loading && trendings.error ? (
        <div> Error: {trendings.error}</div>
      ) : null}
      {!trendings.loading && trendings.trending.length != 0
        ? trendings.trending.coins.map((trending, i) => (
            <EventCard trending={trending} key={i} />
          ))
        : null}
    </div>
  );
};

export default Events;
