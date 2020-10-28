module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter - Photon',
    author: 'Hunter Chang',
    description: 'A Gatsby.js Starter based on Photon by HTML5 UP',
  },
  plugins: [
    'gatsby-plugin-react-head',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-158809546-1',
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'c66e3hl7pdvl',
        accessToken: 'MA7FdVyrzOasTWOR4gJL-K86TYDVIFQOt-6wkMvQeL0',
      },
    },
  ],
}
