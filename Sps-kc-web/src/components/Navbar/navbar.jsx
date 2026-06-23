import React, { useEffect } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  useEffect(() => {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.getElementById("nav-links");
    if (menuIcon && navLinks) {
      menuIcon.onclick = () => {
        navLinks.style.display =
          navLinks.style.display === "flex" ? "" : "flex";
      };
    }
    // Cleanup
    return () => {
      if (menuIcon) menuIcon.onclick = null;
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    const navLinks = document.getElementById("nav-links");
    if (navLinks) {
      navLinks.style.display = "";
    }
  }, [location]);

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
          <img src="/img/logo/sps kc png.png" alt="logo" />
        </a>
      </div>
      <div className="menu-icon" id="menu-icon">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className="nav-links" id="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/#about">About</Link>
        </li>
        <li className="dropdown">
          <button
            className="dropbtn"
            aria-expanded="false"
            aria-haspopup="true"
          >
            <span>Office Bearers</span>
            <span className="arrow">&#9662;</span>
          </button>
          <div className="dropdown-content" role="menu">
            <Link to="/team" role="menuitem">
              Present Office Bearers
            </Link>
            <Link to="/execom-24" role="menuitem">
              Office Bearers 2024
            </Link>
            <Link to="/execom-23" role="menuitem">
              Office Bearers 2023
            </Link>
            <Link to="/execom-22" role="menuitem">
              Office Bearers 2022
            </Link>
            <Link to="/execom-21" role="menuitem">
              Office Bearers 2021
            </Link>
          </div>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/sbc">SBC</Link>
        </li>
        <li>
          <Link to="/awards">Awards</Link>
        </li>
        <li>
          <Link to="/achievements">Achievements</Link>
        </li>
      </ul>
    </nav>
  );
}
