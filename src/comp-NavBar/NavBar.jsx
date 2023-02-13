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
        <Link to="/">
          <div className="flex">
            <img className="mr-5" src="/Images/NavBar/WillingHearts_logo.png" />
            <div className="mt-7 navbar-logo-text">WILLING HEARTS</div>
          </div>
        </Link>

        <ul className="nav-items">
          <div className="w-[600px]"></div>
          <li
            className="noWrap grey"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <NavLink
              to="/about-us"
              // className={(navData) => (navData.isActive ? styles.active : "")}
            >
              ABOUT US
            </NavLink>
            {dropdown && <Dropdown />}
          </li>
          <li className="grey">
            <NavLink
              to="/donate"
              // className={(navData) => (navData.isActive ? styles.active : "")}
            >
              DONATE
            </NavLink>
          </li>
          <li className="grey">
            <NavLink
              to="/volunteer"
              // className={(navData) => (navData.isActive ? styles.active : "")}
            >
              VOLUNTEER
            </NavLink>
          </li>
          <li className="noWrap grey">
            <NavLink
              to="/contact-us"
              // className={(navData) => (navData.isActive ? styles.active : "")}
            >
              CONTACT US
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              // className={(navData) => (navData.isActive ? styles.active : "")}
            >
              <img src="/Images/NavBar/person.png" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
