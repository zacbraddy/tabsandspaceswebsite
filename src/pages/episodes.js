import React from 'react'
import Layout from '../components/layout'
import EpisodeHeader from '../components/episodes/Header'
import Season1 from '../components/episodes/Season1.js'
import Season2 from '../components/episodes/Season2.js'
import Season3 from '../components/episodes/Season3.js'
import Seo from '../components/home/Seo'

export default () => {
  return (
    <Layout>
      <Seo
        title="All Episodes"
        description="Check out our entire back catalogue of episodes"
      />
      <EpisodeHeader />
      <Season3 />
      <Season2 />
      <Season1 />
    </Layout>
  )
}
