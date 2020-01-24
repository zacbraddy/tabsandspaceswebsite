import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Seo from '../components/Seo'
import Subscribe from '../components/Subscribe'
import EpisodeList from '../components/EpisodeList'
import MailingList from '../components/MailingList'


class Homepage extends React.Component {
  render() {
    const siteTitle = 'tabs AND spaces'
    let siteDescription = 'A straight shooting podcast that talks about software development topics that developers care about'

    return (
      <Layout>
        <Seo siteTitle={siteTitle} siteDescription={siteDescription} />

        {/*<section id="one" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>
                  Lorem ipsum dolor adipiscing
                  <br />
                  amet dolor consequat
                </h2>
              </header>
              <p>
                Adipiscing a commodo ante nunc accumsan et interdum mi ante
                adipiscing. A nunc lobortis non nisl amet vis sed volutpat
                aclacus nascetur ac non. Lorem curae et ante amet sapien sed
                tempus adipiscing id accumsan.
              </p>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={pic01} alt="" />
              </span>
            </div>
          </div>
        </section>*/}

        <section id="show-description" className="main style2">
          <div className="grid-wrapper">
            <div className="col-6">
              <ul className="major-icons">
                {/*<li>
                  <span className="icon style1 major fa-code"></span>
                </li>
                <li>
                  <span className="icon style2 major fa-bolt"></span>
                </li>
                <li>
                  <span className="icon style3 major fa-camera-retro"></span>
                </li>*/}
                <li>
                  <span className="icon style4 major fa-cog"></span>
                </li>
                {/*<li>
                  <span className="icon style5 major fa-desktop"></span>
                </li>
                <li>
                  <span className="icon style6 major fa-calendar"></span>
                </li>*/}
              </ul>
            </div>
            <div className="col-6">
              <header className="major">
                <h2>
                  {siteDescription}
                </h2>
              </header>
              <p>
                {siteTitle} is a podcast put together by three developers
                with over 30 years of collective experience in software
                development. We're here to tell you what we really think about
                the difficult problems that face software developers throughout
                their career and we promise that we won't always agree!
              </p>
            </div>
          </div>
        </section>

        { /* Commented out as they reveal some stuff about the show */}
        {/* <EpisodeList /> */}

        {/* <Subscribe /> */}
        <MailingList />
      </Layout>
    )
  }
}

export default Homepage
