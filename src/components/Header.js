import React from 'react'
import { Link } from 'gatsby'
import colourLogo from '../assets/images/colour-logo.svg'
import headerLogo from '../assets/images/header-logo.svg'

export default () => (
  <>
    <nav className="menu-nav">
      <a href="/#header" className="menu-nav__link">
        <img src={headerLogo} alt="Tabs and Spaces podcast logo" />
      </a>
      <ul className="menu-nav__inner">
        <li className="menu-nav__item">
          <Link to="/#show-description" className="menu-nav__link">
            About the show
          </Link>
        </li>
        <li className="menu-nav__item">
          <Link to="/#latest-episodes" className="menu-nav__link">
            Just the latest episodes
          </Link>
        </li>
        <li className="menu-nav__item">
          <Link to="/episodes" className="menu-nav__link">
            All the episodes
          </Link>
        </li>
        <li className="menu-nav__item">
          <Link to="/#hosts" className="menu-nav__link">
            About us
          </Link>
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
