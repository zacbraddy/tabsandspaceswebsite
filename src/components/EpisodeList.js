import React from 'react'
import Episode from './Episode'
import latest from '../config/latest-episodes'
import services from '../config/podcast-services'

export default () => (
  <section id="latest-episodes" className="main style3 special">
    <div className="grid-wrapper">
      <div className="col-12">
        <header className="major">
          <h2>Episodes</h2>
        </header>
        <p>Check out our latest episode</p>
      </div>
      <div className="col-12">
        <iframe
          style={{ border: 'none' }}
          src="//html5-player.libsyn.com/embed/episode/id/13202597/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/333333/"
          height="90"
          width="100%"
          scrolling="no"
          allowfullscreen
          webkitallowfullscreen
          mozallowfullscreen
          oallowfullscreen
          msallowfullscreen
        ></iframe>
      </div>
      <div className="col-12" style={{ marginTop: '3rem' }}>
        But also don't forget to subscribe to us on your favourite podcast
        destination
      </div>
      {services.map(sub => {
        return (
          <div className="col-2 sub-icon-container">
            <a
              href={sub.url}
              className="sub-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              {sub.icon}
            </a>
          </div>
        )
      })}
    </div>
  </section>
)
