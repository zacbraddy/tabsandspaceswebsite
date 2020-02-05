import React from 'react'
import services from '../config/podcast-services'

let rss = services.find(serv => {
  return serv.name == 'RSS'
}).url;

let podchaser = services.find(serv => {
  return serv.name == 'PocketCasts'
}).url;

export default () => (

  <section id="subscribe" className="main style2">
    <div className="grid-wrapper">
      <div className="col-6">
        <ul className="major-icons">
          <li>
            <a href={podchaser.length > 0 ? podchaser : rss } target="_blank" rel="noopener noreferrer">
              <span className="icon style3 major fa-podcast"></span>
            </a>
          </li>
        </ul>
      </div>
      <div className="col-6">
        <header className="major">
          <h2>
            Feed us to your podcatcher!
          </h2>
        </header>
        <p>
          Ensure that you subscribe to the show to get the latest episodes as soon as they drop. You can subscribe on:
        </p>
        <ul>
            {
              services.map((sub) => {
                if (sub.url.length >  0) {
                return (
                    <li>
                        <a href={sub.url} target="_blank" rel="noopener noreferrer">{sub.name}</a>
                    </li>);
                }
              })
            }
        </ul>
      </div>
    </div>
  </section>
)
