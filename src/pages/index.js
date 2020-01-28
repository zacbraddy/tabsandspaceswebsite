import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Seo from '../components/Seo'
import Subscribe from '../components/Subscribe'
import EpisodeList from '../components/EpisodeList'
import MailingList from '../components/MailingList'
import ShowDescription from '../components/ShowDescription'

class Homepage extends React.Component {
  render() {
    const siteTitle = 'tabs AND spaces'
    let siteDescription =
      'A straight shooting podcast that talks about software development topics that developers care about'

    return (
      <Layout>
        <Seo siteTitle={siteTitle} siteDescription={siteDescription} />

        <ShowDescription
          siteTitle={siteTitle}
          siteDescription={siteDescription}
        />

        {/* <Subscribe /> */}
        <MailingList />

        {/* Commented out as they reveal some stuff about the show */}
        <EpisodeList />
      </Layout>
    )
  }
}

export default Homepage
