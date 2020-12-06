import React from 'react'
import Layout from '../components/layout'
import CommunityHeader from '../components/community-content/Header'
import Contents from '../components/community-content/contents'
import Seo from '../components/home/Seo'

export default () => {
  return (
    <Layout>
      <Seo
        title="Community Content"
        description="All the wonderful articles and feedback that we've received from our community over time"
      />
      <section className="align-center main style2">
        <CommunityHeader />
      </section>
      <section className="main style3 special">
        <Contents />
      </section>
    </Layout>
  )
}
