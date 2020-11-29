import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/home/Seo'
import LatestEpisodeList from '../components/home/LatestEpisodeList'
import GotToTheBottom from '../components/home/GotToTheBottom'
import ShowDescription from '../components/home/ShowDescription'
import Hosts from '../components/home/Hosts'

export default () => (
  <Layout>
    <Seo />

    <ShowDescription />

    <LatestEpisodeList />

    <Hosts />

    <GotToTheBottom />
  </Layout>
)
