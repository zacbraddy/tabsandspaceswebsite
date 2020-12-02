if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

module.exports = {
  siteMetadata: {
    siteName: 'Tabs and Spaces Podcast',
    title: 'Tabs and Spaces Podcast',
    titleTemplate: '%s - Tabs and Spaces Podcast',
    author: 'Tabs and Spaces Podcast',
    description:
      'A straight shooting podcast that talks about software development topics that developers care about',
    url: 'https://tabsandspaces.io/',
    twitterUsername: '@tabsnspacesHQ',
    image: '/images/colour-logo.jpg',
    rssFeedUrl: 'https://tabsandspaces.libsyn.com/rss',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [process.env.GATSBY_GTAG_TRACKING_ID],
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_API_KEY,
      },
    },
  ],
}
