import React from 'react'
import Host from './Host'
import { graphql, useStaticQuery } from 'gatsby'

export default () => {
  const query = useStaticQuery(graphql`
    query allHosts {
      allContentfulHostProfile {
        nodes {
          altText
          image {
            file {
              url
            }
          }
          url
          description
          name
        }
      }
    }
  `)

  const allHosts = query.allContentfulHostProfile.nodes.map((h) => ({
    name: h.name,
    description: h.description,
    url: h.url,
    image: h.image.file.url,
    altText: h.altText,
  }))

  return (
    <section id="hosts" className="main style2">
      <div className="grid-wrapper">
        <div className="col-12">
          <header className="major">
            <h2>Your Hosts</h2>
            <p>Meet the hosts here. We're a welcoming, if opinionated, bunch</p>
          </header>
        </div>
        {allHosts.map((host, idx) => (
          <Host key={idx} {...host} />
        ))}
      </div>
    </section>
  )
}
