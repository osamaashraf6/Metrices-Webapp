import React from 'react';
import { NavLink } from 'react-router-dom';
import mic from '../assets/mic-icon.svg';
import setting from '../assets/settings-icon.svg';
import '../style/header.css';
import leftArrow from '../assets/arrow_left.svg';

const Header = () => (
  <div className="header">
    <div className="header-logo">
      <NavLink to="/">
        <img src={leftArrow} alt="left arrow" />
      </NavLink>
      <h2>Stock Metrics</h2>
    </div>
    <div className="header-icons">
      <img src={mic} alt="mic-icon" />
      <img src={setting} alt="setting-icon" />
    </div>
  </div>
);

export default Header;
