import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query SiteDescription {
    site {
      siteMetadata {
        siteName
        description
      }
    }
  }
`

export default () => {
  const { site } = useStaticQuery(query)

  const { siteName, description } = site.siteMetadata

  return (
    <section id="show-description" className="main style2">
      <div className="grid-wrapper">
        <div className="col-12">
          <header className="major">
            <h2>{description}</h2>
          </header>
          <p>
            {siteName} is a podcast put together by three developers with over
            40 years of collective experience in software development. We're
            here to tell you what we really think about the difficult problems
            that face software developers throughout their career and we promise
            that we won't always agree! Every month we meet new people who come
            on the show to share their experiences and make jokes at our
            expense, so what's not to like?
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
}
