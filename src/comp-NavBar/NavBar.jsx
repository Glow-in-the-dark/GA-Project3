import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import styles from "./NavBar.module.css";
import "./NavBar.css";
import Dropdown from "./Dropdown";

const NavBar = () => {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <header>
      <nav className="navbar">
        <img src="/images/NavBar/WillingHearts_logo.png" />
        <Link to="/" className="navbar-logo-text">
          <div>WILLING HEARTS</div>
        </Link>
        <ul className="nav-items">
          <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <NavLink
              to="/about-us"
              // className={(navData) => (navData.isActive ? styles.active : "")}
            >
              ABOUT US
            </NavLink>
            {dropdown && <Dropdown />}
          </li>
          <li>
            <NavLink
              to="/donate"
              // className={(navData) => (navData.isActive ? styles.active : "")}
            >
              DONATE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/volunteer"
              // className={(navData) => (navData.isActive ? styles.active : "")}
            >
              VOLUNTEER
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              // className={(navData) => (navData.isActive ? styles.active : "")}
            >
              CONTACT US
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
