import React, { isFlipped } from 'react'
import Episode from './Episode'
import latest from '../config/latest-episodes'
import services from '../config/podcast-services'

export default () => {
  return (
    <section id="latest-episodes" className="main style3 special">
      <div className="grid-wrapper">
        <div className="col-12">
          <header className="major">
            <h2>Latest Episodes</h2>
          </header>
          <p>Check out our latest episodes</p>
        </div>
        {latest.map(ep => (
          <Episode {...ep} />
        ))}
        <div className="col-12" style={{ marginTop: '3rem' }}>
          But also don't forget to check out the rest and subscribe to us on your favourite podcast
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
}
