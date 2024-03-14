import React from "react";
import { Navbar } from "../components/Navbar";
import { EventListC } from "../components/EventListC";
import json from "../assets/eventList.json";
import styles from "./styles/EventList.module.css";

const EventList: React.FC = () => {
  return (
    <>
      <Navbar />

      <div className={styles.divItem}>
        {json.map((eventItem) => (
          <EventListC
            eventId={eventItem.eventId}
            eventName={eventItem.eventName}
            eventImg={eventItem.eventImg}
            eventDate={eventItem.eventDate}
            eventLocation={eventItem.eventLocation}></EventListC>
        ))}
      </div>
    </>
  );
};

export { EventList };
