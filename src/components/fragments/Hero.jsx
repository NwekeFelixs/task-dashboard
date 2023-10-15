import React from 'react';
import '../css/style.css';
import avatarImage from '../images/avatar-1.png'; 
import {IoArrowForwardOutline, IoEllipsisHorizontalOutline, IoPencilOutline, IoMailOutline, IoRefreshOutline, IoTrashOutline, IoCheckmarkDone, IoCreateOutline, IoTrendingDownOutline, IoTrendingUpOutline,  } from 'react-icons/io5'

function Hero() {
  const toggleContextMenu = (event) => {
    event.target.nextElementSibling.classList.toggle('active');
  };

  return (
    <section className="home">
      <div className="card profile-card">
        <button className="card-menu-btn icon-box" aria-label="More" data-menu-btn onClick={toggleContextMenu}>
          <IoEllipsisHorizontalOutline/>
        </button>

        <ul className="ctx-menu">
          <li className="ctx-item">
            <button className="ctx-menu-btn icon-box">
              <IoPencilOutline/>
              <span className="ctx-menu-text">Edit</span>
            </button>
          </li>
          <li className="ctx-item">
            <button className="ctx-menu-btn icon-box">
              <IoRefreshOutline/>
              <span className="ctx-menu-text">Refresh</span>
            </button>
          </li>
          <li className="divider"></li>
          <li className="ctx-item">
            <button className="ctx-menu-btn red icon-box">
<IoTrashOutline/>
              <span className="ctx-menu-text">Deactivate</span>
            </button>
          </li>
        </ul>
        <div className="profile-card-wrapper">
          <figure className="card-avatar">
            <img src={avatarImage} alt="Elizabeth Foster" width="48" height="48" />
          </figure>
          <div>
            <p className="card-title">Felix Nweke</p>
            <p className="card-subtitle">Web Designer & Developer</p>
          </div>
        </div>

        <ul className="contact-list">
          <li>
            <a href="mailto:xyz@mail.com" className="contact-link icon-box">
              <IoMailOutline/>
              <p className="text">xyz@mail.com</p>
            </a>
          </li>
          <li>
            <a href="tel:00123456789" className="contact-link icon-box">
              <span className="material-symbols-rounded icon">call</span>
              <p className="text">+00 123-456-789</p>
            </a>
          </li>
        </ul>

        <div className="divider card-divider"></div>

        <ul className="progress-list">
          <li className="progress-item">
            <div className="progress-label">
              <p className="progress-title">Project Completion</p>
              <data className="progress-data" value="85">85%</data>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ '--width': '85%', '--bg': 'var(--blue-ryb)' }}></div>
            </div>
          </li>
          <li className="progress-item">
            <div className="progress-label">
              <p className="progress-title">Overall Rating</p>
              <data className="progress-data" value="7.5">7.5</data>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ '--width': '75%', '--bg': 'var(--coral)' }}></div>
            </div>
          </li>
        </ul>
      </div>

      <div className="card-wrapper">
        <div className="card task-card">
          <div className="card-icon icon-box green">
            <IoCheckmarkDone/>
          </div>
          <div>
            <data className="card-data" value="21">21</data>
            <p className="card-text">Tasks Completed</p>
          </div>
        </div>
        <div className="card task-card">
          <div className="card-icon icon-box blue">
            <IoCreateOutline/>
          </div>
          <div>
            <data className="card-data" value="21">21</data>
            <p className="card-text">Tasks Inprogress</p>
          </div>
        </div>
      </div>

      <div className="card revenue-card">
        <button className="card-menu-btn icon-box" aria-label="More" data-menu-btn onClick={toggleContextMenu}>
          <IoEllipsisHorizontalOutline/>
        </button>
        <ul className="ctx-menu">
          <li className="ctx-item">
            <button className="ctx-menu-btn icon-box">
              <IoPencilOutline/>
              <span className="ctx-menu-text">Edit</span>
            </button>
          </li>
          <li className="ctx-item">
            <button className="ctx-menu-btn icon-box">
              <IoRefreshOutline/>
              <span className="ctx-menu-text">Refresh</span>
            </button>
          </li>
        </ul>
        <p className="card-title">Revenue</p>
        <data className="card-price" value="2100">$2,100</data>
        <p className="card-text">Last Week</p>
        <div className="divider card-divider"></div>
        <ul className="revenue-list">
          <li className="revenue-item icon-box">
            <IoTrendingUpOutline className='green icon'/>
            <div>
              <data className="revenue-item-data" value="15">15%</data>
              <p className="revenue-item-text">Prev Week</p>
            </div>
          </li>
          <li className="revenue-item icon-box">
            <IoTrendingDownOutline className='red icon'/>
            <div>
              <data className="revenue-item-data" value="10">10%</data>
              <p className="revenue-item-text">Prev Month</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;
