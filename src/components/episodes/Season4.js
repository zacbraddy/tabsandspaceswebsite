import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Episode from '../Episode'

export default () => {
  const extractData = (ep) => ({
    name: ep.node.episodeName.episodeName,
    subtitle: ep.node.episodeSubtitle.episodeSubtitle,
    image: ep.node.episodeArt.file.url,
    altText: ep.node.episodeArtAltText.episodeArtAltText,
    episodeId: ep.node.libsynId,
    trailer: ep.node.episodeTrailer && ep.node.episodeTrailer.file.url,
  })

  const query = useStaticQuery(graphql`
    query allSeason4Episodes {
      allContentfulEpisode(
        filter: { seasonNumber: { eq: 4 } }
        sort: { fields: [episodeNumber] }
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
            episodeTrailer {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  const data = query.allContentfulEpisode.edges.map(extractData)

  return (
    <section className="main style3 special season">
      <div className="grid-wrapper">
        <div className="col-12">
          <header className="major">
            <h2>Season 4 - The Magenta Album</h2>
          </header>
        </div>
        {data.map((ep, idx) => (
          <Episode key={idx} {...ep} />
        ))}
      </div>
    </section>
  )
}
