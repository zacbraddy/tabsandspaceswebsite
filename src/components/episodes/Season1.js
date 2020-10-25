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
  })

  const query = useStaticQuery(graphql`
    query allEpisodes {
      allContentfulEpisode(
        filter: { seasonNumber: { eq: 1 } }
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
            <h2>Season 1 - The Idea</h2>
          </header>
        </div>
        {data.map((ep, idx) => (
          <Episode key={idx} {...ep} />
        ))}
      </div>
    </section>
  )
}
