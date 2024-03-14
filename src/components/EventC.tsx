import React from "react";
import EventStyles from "./styles/EventC.module.css";
import { useNavigate } from "react-router-dom";

import locationImg from "../assets/location.png";
import calendarImg from "../assets/calendar.png";
import seriesImg from "../assets/series.png";

interface EventProps {
  id: string;
  discipline: string;
  imgSrc: string;
  eventHeader: string;
  eventIsSeries: boolean;
  dates: string;
  location: string;
}
const EventC: React.FC<EventProps> = ({
  id,
  discipline,
  imgSrc,
  eventHeader,
  eventIsSeries,
  dates,
  location,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className={EventStyles.eventDiv}
      id={id}
      onClick={() => navigate("/events/" + id)}>
      <div className={EventStyles.mainImg}>
        <div className={EventStyles.discipline}>{discipline}</div>
        <img src={require(`../assets/${imgSrc}.jpg`)} alt="" />
      </div>
      <div className={EventStyles.eventHeader}>{eventHeader}</div>
      {eventIsSeries ? (
        <div className={EventStyles.centered}>
          <img className={EventStyles.icon} src={seriesImg} alt="" />
          Series of events
        </div>
      ) : (
        <div className={EventStyles.centered}>
          <img className={EventStyles.icon} src={seriesImg} alt="" />
          just one single event
        </div>
      )}

      <div className={EventStyles.devide}></div>
      <div className={EventStyles.centered}>
        <img className={EventStyles.icon} src={calendarImg} alt="" />
        {dates}
      </div>
      <div className={EventStyles.centered}>
        <img className={EventStyles.icon} src={locationImg} alt="" />
        {location}
      </div>
    </div>
  );
};

export { EventC };
