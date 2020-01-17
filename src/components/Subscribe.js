import React from 'react'

class Subscribe extends React.Component {
  render() {
    // These values are currently hard coded to use the .NET Core show ones, because I needed values to use
    // We should totally read these from config, when in production
    let podchaserUrl = "https://www.podchaser.com/podcasts/the-net-core-podcast-710798" 
    let subLinks = [
        {
            name : "Apple Podcasts",
            url : "https://podcasts.apple.com/podcast/the-net-core-podcast/id1433496275"
        },
        {
            name: "Google Podcasts",
            url: "https://www.google.com/podcasts?feed=aHR0cHM6Ly90aGVkb3RuZXRjb3JlcG9kY2FzdC5saWJzeW4uY29tL3Jzcw%3D%3D"
        },
        {
            name: "Stitcher",
            url: "https://www.stitcher.com/podcast/the-net-core-podcast"
        },
        {
            name: "PocketCasts",
            url: "https://pca.st/yP3j"
        },
        {
            name: "Spotify",
            url: "https://open.spotify.com/show/6FIM18ZIqQvuX7d1TA9rbZ?si=V82TfPFLTHaBZSZAbH9_rQ"
        },
        {
            name: "RSS",
            url: "https://thedotnetcorepodcast.libsyn.com/rss"
        }
    ];
    return (
        <section id="subscribe" className="main style2">
          <div className="grid-wrapper">
            <div className="col-6">
              <ul className="major-icons">
                {<li>
                  <a href={podchaserUrl} target="_blank" rel="noopener noreferrer">
                    <span className="icon style1 major fa-podcast"></span>
                  </a>
                </li>}
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
                    subLinks.map((sub) => {
                        return (
                            <li>
                                <a href={sub.url} target="_blank" rel="noopener noreferrer">{sub.name}</a>
                            </li>);
                    })
                  }
              </ul>
            </div>
          </div>
        </section>
    )
  }
}

export default Subscribe
