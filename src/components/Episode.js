import React from 'react'
import playLogo from '../assets/images/play-logo.svg'

export default ({ image, altText, name, subtitle, episodeId, play }) => (
  <div className="col-4">
    <span className="image fit">
      <img src={image} alt={altText} />
    </span>
    <h3>{name}</h3>
    <p>{subtitle}</p>
    {play && (
      <ul className="actions">
        <li>
          <a id={episodeId} className="">
          <img
            src={playLogo}
            className="logo play-icon"
            alt="Tabs and spaces podcast. The truth is, you're always wrong"
          />
          </a>
        </li>
      </ul>
    )}
  </div>
)
