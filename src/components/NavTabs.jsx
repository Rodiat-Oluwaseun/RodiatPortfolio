import React from 'react';
import { useState } from 'react';
import "../styles/NavTabs.css";
import { NavLink } from 'react-router-dom';
import logo from "../Images/rodiatlogo.png";
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';





const NavTabs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="navbar-container">
        {/* <div className="logo"><img  src="images/rodiatlogo.png" /></div> */}
        <img src={logo} alt="logo" />
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>
          <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
        </li>
          <li><NavLink
          to="projectpage"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Project Page
        </NavLink>
          </li>
          <li>
          <NavLink
          to="contact/learn"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavTabs;
