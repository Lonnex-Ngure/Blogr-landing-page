import React, { useState } from 'react';
import downArrow from '../assets/icon-arrow-light.svg';
import backgroundimg from '../assets/bg-pattern-intro-desktop.svg';
import navbar from '../assets/icon-hamburger.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1>Blogr</h1>
        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <a href="#">Product</a>
              <img src={downArrow} alt="down arrow" className="down-arrow" />
            </li>
            <li>
              <a href="#">Company</a>
              <img src={downArrow} alt="down arrow" className="down-arrow" />
            </li>
            <li>
              <a href="#">Connect</a>
              <img src={downArrow} alt="down arrow" className="down-arrow" />
            </li>
          </ul>
        </nav>
        <div className="header-buttons">
          <button>Login</button>
          <button className="sign-up">Sign Up</button>
        </div>
        <img src={navbar} alt="menu" className="hamburger-icon" onClick={toggleMenu} />
      </div>
      <div className="header-main">
        <h2>A modern publishing platform</h2>
        <p>Grow your audience and build your online brand</p>
        <div className="header-main-buttons">
          <button>Start for Free</button>
          <button>Learn More</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
