import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Episode from '../Episode'
import services from '../../config/podcast-services'

export default () => {
  const extractData = (ep) => ({
    name: ep.node.episodeName.episodeName,
    subtitle: ep.node.episodeSubtitle.episodeSubtitle,
    image: ep.node.episodeArt.file.url,
    altText: ep.node.episodeArtAltText.episodeArtAltText,
    episodeId: ep.node.libsynId,
  })

  const query = useStaticQuery(graphql`
    query latestEpisodes {
      allContentfulEpisode(
        limit: 3
        sort: { fields: [seasonNumber, episodeNumber], order: [DESC, DESC] }
      ) {
        edges {
          node {
            episodeName {
              episodeName
            }
            episodeSubtitle {
              episodeSubtitle
            }
            episodeArt {
              file {
                url
              }
            }
            libsynId
            episodeArtAltText {
              episodeArtAltText
            }
          }
        }
      }
    }
  `)

  const data = query.allContentfulEpisode.edges.map(extractData)

  return (
    <section id="latest-episodes" className="main style3 special">
      <div className="grid-wrapper">
        <div className="col-12">
          <header className="major">
            <h2>Latest Episodes</h2>
          </header>
          <p>Check out our latest episodes</p>
        </div>
        {data.map((ep, idx) => (
          <Episode key={idx} {...ep} />
        ))}
        <div className="col-12" style={{ marginTop: '3rem' }}>
          But also don't forget to check out the rest and subscribe to us on
          your favourite podcast destination
        </div>
        {services.map((sub, idx) => {
          return (
            <div key={idx} className="col-2 sub-icon-container">
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
}
