import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/Seo'
import Subscribe from '../components/Subscribe'
import EpisodeList from '../components/EpisodeList'
import MailingList from '../components/MailingList'
import ShowDescription from '../components/ShowDescription'
import Hosts from '../components/Hosts'

let siteTitle = 'tabs AND spaces'
let siteDescription = 'A straight shooting podcast that talks about software development topics that developers care about'

export default () => (
  <Layout>
    <Seo siteTitle={siteTitle} siteDescription={siteDescription} />

    <ShowDescription
      siteTitle={siteTitle}
      siteDescription={siteDescription}
    />

    <MailingList />

    <EpisodeList />
    
    <Subscribe />

    <Hosts/>

  </Layout>
)