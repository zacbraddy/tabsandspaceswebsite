import React from 'react'
import colourLogo from '../assets/images/colour-logo.svg'


export default () => (
  <section id="header">
    <div className="inner">
      <img
        src={colourLogo}
        className="logo"
        alt="Tabs and spaces podcast. The truth is, you're always wrong"
      />
    </div>
  </section>
)