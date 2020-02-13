import React from 'react'
import colourLogo from '../assets/images/colour-logo.svg'
import headerLogo from '../assets/images/header-logo.svg'

export default () => (
  <>
    <nav className="menu-nav">
      <a href="#header" className="menu-nav__link">
        <img src={headerLogo} alt="Tabs and Spaces podcast logo" />
      </a>
      <ul className="menu-nav__inner">
        <li className="menu-nav__item">
          <a href="#show-description" className="menu-nav__link">
            About the Show
          </a>
        </li>
        <li className="menu-nav__item">
          <a href="#latest-episodes" className="menu-nav__link">
            Latest Episodes
          </a>
        </li>
        <li className="menu-nav__item">
          <a href="#hosts" className="menu-nav__link">
            About Us
          </a>
        </li>
      </ul>
    </nav>
    <section id="header">
      <div className="inner">
        <img
          src={colourLogo}
          className="logo"
          alt="Tabs and spaces podcast. The truth is, you're always wrong"
        />
      </div>
    </section>
  </>
)
