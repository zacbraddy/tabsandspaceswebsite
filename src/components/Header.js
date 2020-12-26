import React, { useState } from 'react'
import { Link, navigate } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'
import colourLogo from '../assets/images/colour-logo.svg'
import headerLogo from '../assets/images/header-logo.svg'

export default () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const mobileNavigate = (to) => () => {
    navigate(to)
    setMenuOpen(false)
  }

  return (
    <>
      <nav className="menu-nav">
        <div className="menu-nav__mobile">
          <Menu
            isOpen={menuOpen}
            onStateChange={({ isOpen }) => setMenuOpen(isOpen)}
          >
            <a className="menu-nav__link" onClick={mobileNavigate('/#header')}>
              <img src={headerLogo} alt="Tabs and Spaces podcast logo" />
            </a>

            <ul className="menu-nav__inner">
              <li className="menu-nav__item">
                <a
                  onClick={mobileNavigate('/#latest-episodes')}
                  className="menu-nav__link"
                >
                  Just the latest episodes
                </a>
              </li>
              <li className="menu-nav__item">
                <a
                  onClick={mobileNavigate('/episodes')}
                  className="menu-nav__link"
                >
                  All the episodes
                </a>
              </li>
              <li className="menu-nav__item">
                <a
                  onClick={mobileNavigate('/community-content')}
                  className="menu-nav__link"
                >
                  Community created content
                </a>
              </li>
              <li className="menu-nav__item">
                <a
                  onClick={mobileNavigate('/#hosts')}
                  className="menu-nav__link"
                >
                  About us
                </a>
              </li>
            </ul>
          </Menu>
        </div>
        <div className="menu-nav__desktop">
          <Link to="/#header" className="menu-nav__link">
            <img src={headerLogo} alt="Tabs and Spaces podcast logo" />
          </Link>
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
              <Link to="/community-content" className="menu-nav__link">
                Community created content
              </Link>
            </li>
            <li className="menu-nav__item">
              <Link to="/#hosts" className="menu-nav__link">
                About us
              </Link>
            </li>
          </ul>
        </div>
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
}
