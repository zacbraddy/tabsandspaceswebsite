import React from 'react'
import Layout from '../components/layout'
import EpisodeHeader from '../components/episodes/Header'
import Season1 from '../components/episodes/Season1.js'

export default () => {
  return (
    <Layout>
      <EpisodeHeader />
      <Season1 />
    </Layout>
  )
}
