import React from 'react'
import Host from './Host'
import hosts from '../config/host-details'

export default () => (
  <section id="hosts" className="main style3 special">
    <div className="grid-wrapper">
      <div className="col-12">
        <header className="major">
          <h2>Your Hosts</h2>
          <p>Meet the hosts here. We're a welcoming, if opinionated, bunch</p>
        </header>
      </div>
      {hosts.map(host => (
        <Host {...host} />
      ))}
    </div>
  </section>
)
