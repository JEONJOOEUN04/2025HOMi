// src/components/NavBar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './navibar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink 
            to="/window" 
            className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
          >
            스마트 창문
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/light" 
            className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
          >
            스마트 조명
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/alarm" 
            className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
          >
            스마트 날씨 알리미
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
