import React from "react";
import { Navbar } from "../components/Navbar";
import { EventC } from "../components/EventC";

import json from "../assets/events.json";

const Events: React.FC = () => {
  return (
    <>
      <Navbar />

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <EventC
          id={json.id}
          discipline={json.discipline}
          imgSrc={json.imgSrc}
          eventHeader={json.eventsHeader}
          eventIsSeries
          dates={json.dates}
          location={json.location}></EventC>
      </div>
    </>
  );
};

export { Events };
