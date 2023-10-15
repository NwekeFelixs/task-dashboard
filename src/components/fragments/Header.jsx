import React, { useState } from 'react';
import '../css/style.css'; 
import avatar from '../images/avatar-1.png'
import { IoBarChartOutline, IoFolderOutline, IoGridOutline, IoListOutline, IoMenuOutline, IoNotificationsOutline, IoSettingsOutline } from 'react-icons/io5';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isMenuOpen ? 'active' : ''}`}>
      <div className="container">
        <h1>
          <a href="#" className="logo">
            Dashboard
          </a>
        </h1>

        <button className="menu-toggle-btn icon-box" aria-label="Toggle Menu" onClick={toggleMenu}>
          <IoMenuOutline/>
        </button>

        <nav className="navbar">
          <div className="container">
            <ul className="navbar-list">
              <li>
                <a href="#" className="navbar-link active icon-box">
                  <IoGridOutline/>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#" className="navbar-link icon-box">
                  <IoFolderOutline/>
                  <span>Projects</span>
                </a>
              </li>
              <li>
                <a href="#" className="navbar-link icon-box">
                  <IoListOutline/>
                  <span>Tasks</span>
                </a>
              </li>
              <li>
                <a href="#" className="navbar-link icon-box">
                  <IoBarChartOutline/>
                  <span>Reports</span>
                </a>
              </li>
              <li>
                <a href="#" className="navbar-link icon-box">
                  <IoSettingsOutline/>
                  <span>Settings</span>
                </a>
              </li>
            </ul>
            <ul className="user-action-list">
              <li>
                <a href="#" className="notification icon-box">
                  <IoNotificationsOutline/>
                </a>
              </li>
              <li>
                <a href="#" className="header-profile">
                  <figure className="profile-avatar">
                    <img src={avatar} alt="Elizabeth Foster" width="32" height="32" />
                  </figure>
                  <div>
                    <p className="profile-title">Felix N</p>
                    <p className="profile-subtitle">Admin</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
