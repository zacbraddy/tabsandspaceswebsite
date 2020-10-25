import React from 'react'

export default ({ siteDescription, siteTitle }) => (
  <section id="show-description" className="main style2">
    <div className="grid-wrapper">
      <div className="col-12">
        <header className="major">
          <h2>{siteDescription}</h2>
        </header>
        <p>
          {siteTitle} is a podcast put together by three developers with over 30
          years of collective experience in software development. We're here to
          tell you what we really think about the difficult problems that face
          software developers throughout their career and we promise that we
          won't always agree!
        </p>
        <div className="trailer-container">
          <h3>Wanna hear a little more about it?</h3>
          <div className="trailer-player">
            <iframe
              style={{ border: 'none' }}
              src="//html5-player.libsyn.com/embed/episode/id/15861791/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/222222/menu/no/"
              height="90"
              width="100%"
              scrolling="no"
              allowFullScreen
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              oallowfullscreen="true"
              msallowfullscreen="true"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
)
