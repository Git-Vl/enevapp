import React from "react";
import EventListStyles from "./styles/EventListC.module.css";

import locationImg from "../assets/location.png";
import calendarImg from "../assets/calendar.png";

interface EventProps {
  eventId: string;
  eventName: string;
  eventImg: string;
  eventDate: string;
  eventLocation: string;
}
const EventListC: React.FC<EventProps> = ({
  eventId,
  eventName,
  eventImg,
  eventDate,
  eventLocation,
}) => {
  return (
    <div className={EventListStyles.eventDiv} id={eventId}>
      <div className={EventListStyles.mainImg}>
        <img src={require(`../assets/${eventImg}.jpg`)} alt="" />
      </div>
      <div className={EventListStyles.eventHeader}>{eventName}</div>

      <div className={EventListStyles.devide}></div>
      <div className={EventListStyles.centered}>
        <img className={EventListStyles.icon} src={calendarImg} alt="" />
        {eventDate}
      </div>
      <div className={EventListStyles.centered}>
        <img className={EventListStyles.icon} src={locationImg} alt="" />
        {eventLocation}
      </div>
    </div>
  );
};

export { EventListC };
