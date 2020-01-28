import React from 'react'
import Episode from './Episode'
import latest from '../config/latest-episodes'

export default () => (
  <section id="latest-episodes" className="main style3 special">
    <div className="grid-wrapper">
      <div className="col-12">
        <header className="major">
          <h2>The latest episodes</h2>
        </header>
        <p>Here is a list of the three latest episodes of the podcast</p>
      </div>
      {latest.map(ep => (
        <Episode {...ep} showMore="true" />
      ))}
    </div>
  </section>
)
