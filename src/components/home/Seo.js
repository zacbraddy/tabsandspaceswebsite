import React from 'react'
import { Title, Link, Meta } from 'react-head'
import logoUrl from '../../assets/images/colour-logo.jpg'

let siteTitle = 'Tabs and Spaces Podcast'
let siteDescription =
  'A straight shooting podcast that talks about software development topics that developers care about'
let siteUrl = 'https://tabsandspaces.io/'
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
        url: imageUrl,
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
  <>
    <script type="application/ld+json">
      {JSON.stringify(schemaOrgJSONLD)}
    </script>

    <Title>{siteTitle}</Title>
    <Meta title={siteTitle} />

    {/* Tells Google et al. to index the site*/}
    <Meta name="ROBOTS" content="INDEX, FOLLOW" />

    {/* testing ground for CSP */}
    {/* <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self' https://tabsandspaces.io; connect-src 'self' https://*.googleapis.com https://*.google-analytics.com https://*.podfonts.com https://*.gstatic.com; worker-src 'self' https://tabsandspaces.io; font-src 'self' data: https://*.gstatic.com https://*.podfonts.com https://*.googleapis.com; frame-src https://*.libsyn.com; style-src 'self' blob: https://*.podfonts.com https://*.googleapis.com 'sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=' 'sha256-MtxTLcyxVEJFNLEIqbVTaqR4WWr0+lYSZ78AzGmNsuA=' 'sha256-LoSV/eO79zdTaQiBHoxSemK7YIw/zVPIGDsbpCcCD0o='; script-src 'self' 'sha256-aTEqOfuWzJyvuhhXN1/lt3hgXAovALZTLY327vs8upg=' 'sha256-KWO6UOhc/cfhZd4gtXYPu4WkSRPuCQDtCkF/v9OyJB8=' 'sha256-4l1SGUDtxRfk+A4o0nWdUWFoIgxd1ShQ/4W34rLW47s='; manifest-src 'self'; script-src-elem 'self' https://*.google-analytics.com;" /> */}

    {/* Open Graph stuff */}
    <Meta property="og:site_name" content={siteTitle} />
    <Meta property="og:type" content="website" />
    <Meta property="og:title" content={siteTitle} />
    <Meta property="og:description" content={siteDescription} />
    <Meta property="og:url" content={siteUrl} />
    <Meta property="og:image" content={imageUrl} />
    <Meta property="og:image:width" content="1200" />
    <Meta property="og:image:height" content="400" />

    {/* Twitter specific Open Graph stuff */}
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta name="twitter:title" content={siteTitle} />
    <Meta name="twitter:description" content={siteDescription} />
    <Meta name="twitter:url" content={siteUrl} />
    <Meta name="twitter:image" content={imageUrl} />
    <Meta name="twitter:site" content={twitterHandle} />
    <Meta name="twitter:creator" content={twitterHandle} />

    <Link
      href={rssFeedUrl}
      rel="alternate"
      type="application/rss+xml"
      title={siteTitle}
    />
    <Link
      rel="stylesheet"
      href="https://cdn.podfonts.com/releases/v1.1.0/css/podfonts.css"
      integrity="sha384-JH5tKI4CUyK92X34BURCL05JcPhlKOfX7IlfBvkcRn75+/o6JU2PmnlKwOwsYfel"
      crossorigin="anonymous"
    />
  </>
)
