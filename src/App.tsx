import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import { Home } from "./containers/Home";
import { Events } from "./containers/Events";
import { EventList } from "./containers/EventList";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route path="" element={<Home />} />

          <Route path="events">
            <Route path="" element={<Events />} />
            <Route path="events1" element={<EventList />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
