import React from "react";
import styles from "./styles/Navbar.module.css";
import { NavLink, Outlet } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <>
      <header className={styles.navbar}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/events">Events</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export { Navbar };
