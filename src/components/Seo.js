import React from 'react'
import Helmet from 'react-helmet'
import logoUrl from '../assets/images/colour-logo.jpg'

let siteTitle = 'tabs AND spaces'
let siteDescription =
  'A straight shooting podcast that talks about software development topics that developers care about'
let siteUrl = 'http://tabsandspaces.io/'
let twitterHandle = '@tabsnspacesHQ'

// Note from Jamie: I don't like having to hard code this URL, but the structured data has
// to have the absolute URL for the image
let imageUrl = `https://tabsandspaces.io${logoUrl}`

let schemaOrgJSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    publisher: {
      '@type': 'Organization',
      name: siteTitle,
      logo: {
        '@type': 'ImageObject',
        imageUrl,
      },
    },
    url: siteUrl,
    image: {
      '@type': 'ImageObject',
      url: imageUrl,
      width: 1200,
      height: 400,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': siteUrl,
    },
    description: siteDescription,
  },
]

let rssFeedUrl = 'https://tabsandspaces.libsyn.com/rss'

export default () => (
  <Helmet>
    <title> {siteTitle} </title>
    <meta title={siteTitle} />

    {/* Tells Google et al. to index the site*/}
    <meta name="ROBOTS" content="INDEX, FOLLOW" />

    {/* testing ground for CSP */}
    {/* <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self' https://tabsandspaces.io; connect-src 'self' https://*.googleapis.com https://*.google-analytics.com https://*.podfonts.com https://*.gstatic.com; worker-src 'self' https://tabsandspaces.io; font-src 'self' data: https://*.gstatic.com https://*.podfonts.com https://*.googleapis.com; frame-src https://*.libsyn.com; style-src 'self' blob: https://*.podfonts.com https://*.googleapis.com 'sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=' 'sha256-MtxTLcyxVEJFNLEIqbVTaqR4WWr0+lYSZ78AzGmNsuA=' 'sha256-LoSV/eO79zdTaQiBHoxSemK7YIw/zVPIGDsbpCcCD0o='; script-src 'self' 'sha256-aTEqOfuWzJyvuhhXN1/lt3hgXAovALZTLY327vs8upg=' 'sha256-KWO6UOhc/cfhZd4gtXYPu4WkSRPuCQDtCkF/v9OyJB8=' 'sha256-4l1SGUDtxRfk+A4o0nWdUWFoIgxd1ShQ/4W34rLW47s='; manifest-src 'self'; script-src-elem 'self' https://*.google-analytics.com;" /> */}

    {/* Open Graph stuff */}
    <meta property="og:site_name" content={siteTitle} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={siteTitle} />
    <meta property="og:description" content={siteDescription} />
    <meta property="og:url" content={siteUrl} />
    <meta property="og:image" content={imageUrl} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="400" />

    {/* Twitter specific Open Graph stuff */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={siteTitle} />
    <meta name="twitter:description" content={siteDescription} />
    <meta name="twitter:url" content={siteUrl} />
    <meta name="twitter:image" content={imageUrl} />
    <meta name="twitter:site" content={twitterHandle} />
    <meta name="twitter:creator" content={twitterHandle} />

    {/* Linked Data - for in results cards */}
    <script type="application/ld+json">
      {JSON.stringify(schemaOrgJSONLD)}
    </script>

    {/*
            We don't want to include an empty RSS feed here, so only include these meta tags when
            we have one.
            We can totally ditch this check, once the RSS feed has been created .
            This allows Google et al. to offer episode players in the search results
        */}
    {siteTitle ? (
      <link
        href={rssFeedUrl}
        rel="alternate"
        type="application/rss+xml"
        title={siteTitle}
      />
    ) : null}
    {siteTitle ? (
      <link
        href={rssFeedUrl}
        rel="feed"
        type="application/rss+xml"
        title={siteTitle}
      />
    ) : null}
    <link
      rel="stylesheet"
      href="https://cdn.podfonts.com/releases/v1.1.0/css/podfonts.css"
      integrity="sha384-JH5tKI4CUyK92X34BURCL05JcPhlKOfX7IlfBvkcRn75+/o6JU2PmnlKwOwsYfel"
      crossorigin="anonymous"
    />
  </Helmet>
)
