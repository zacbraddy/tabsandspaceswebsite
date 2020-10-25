import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/home/Seo'
import LatestEpisodeList from '../components/home/LatestEpisodeList'
import GotToTheBottom from '../components/home/GotToTheBottom'
import ShowDescription from '../components/home/ShowDescription'
import Hosts from '../components/home/Hosts'

let siteTitle = 'tabs AND spaces'
let siteDescription =
  'A straight shooting podcast that talks about software development topics that developers care about'

export default () => (
  <Layout>
    <Seo siteTitle={siteTitle} siteDescription={siteDescription} />

    <ShowDescription siteTitle={siteTitle} siteDescription={siteDescription} />

    <LatestEpisodeList />

    <Hosts />

    <GotToTheBottom />
  </Layout>
)
