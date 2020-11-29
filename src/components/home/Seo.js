import React from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        siteName
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
        author
        rssFeedUrl
      }
    }
  }
`

export default ({ title, description, image, article }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
    siteName,
    rssFeedUrl,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
    siteName: siteName,
    twitterUsername,
    rssFeedUrl,
  }

  const schemaOrgJSONLD = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      publisher: {
        '@type': 'Organization',
        name: seo.title,
        logo: {
          '@type': 'ImageObject',
          url: seo.image,
        },
      },
      url: seo.title,
      image: {
        '@type': 'ImageObject',
        url: seo.image,
        width: 1200,
        height: 400,
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': seo.url,
      },
      description: seo.description,
    },
  ]

  return (
    <Helmet
      defer={false}
      defaultTitle={seo.title}
      titleTemplate={titleTemplate}
    >
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* Tells Google et al. to index the site*/}
      <Meta name="ROBOTS" content="INDEX, FOLLOW" />

      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {/* Open Graph stuff */}
      {seo.siteName && <meta property="og:site_name" content={seo.siteName} />}
      <meta property="og:type" content="website" />
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="400" />

      {/* Twitter specific Open Graph stuff */}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.url && <meta name="twitter:url" content={seo.url} />}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      {seo.twitterUsername && (
        <meta name="twitter:site" content={seo.twitterUsername} />
      )}
      {seo.twitterUsername && (
        <meta name="twitter:creator" content={seo.twitterUsername} />
      )}

      <link
        href={seo.rssFeedUrl}
        rel="alternate"
        type="application/rss+xml"
        title={seo.sitename}
      />

      <link
        rel="stylesheet"
        href="https://cdn.podfonts.com/releases/v1.1.0/css/podfonts.css"
        integrity="sha384-JH5tKI4CUyK92X34BURCL05JcPhlKOfX7IlfBvkcRn75+/o6JU2PmnlKwOwsYfel"
        crossorigin="anonymous"
      />
    </Helmet>
  )
}
