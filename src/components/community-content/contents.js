import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Content from './content'

export default () => {
  const extractData = (post) => ({
    title: post.node.title,
    sentToUs: post.node.sentToUs,
    author: post.node.author,
    inResponseToEpisode: {
      contentful_id: post.node.inResponseToEpisode.contentful_id,
      episodeNumber: post.node.inResponseToEpisode.episodeNumber,
      seasonNumber: post.node.inResponseToEpisode.seasonNumber,
    },
    content: post.node.content,
  })

  const query = useStaticQuery(graphql`
    query allContent {
      allContentfulCommunityPost(sort: { fields: sentToUs, order: DESC }) {
        edges {
          node {
            content {
              raw
            }
            author
            sentToUs
            title
            inResponseToEpisode {
              contentful_id
              episodeNumber
              seasonNumber
            }
          }
        }
      }
    }
  `)

  const data = query.allContentfulCommunityPost.edges.map(extractData)

  return (
    <div className="grid-wrapper">
      <div className="col-12">
        {data.map((post) => (
          <Content {...post} />
        ))}
      </div>
    </div>
  )
}
