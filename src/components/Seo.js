import React from 'react'
import Helmet from 'react-helmet'
import logoUrl from '../assets/images/colour-logo.jpg'

class Seo extends React.Component {
    render() {
        let siteTitle = this.props.siteTitle
        let siteDescription = this.props.siteDescription
        let siteUrl = 'http://tabsandspaces.io/'
        let twitterHandle = '@tabsandspacespod' //assumption

        // Note from Jamie: I don't like having to hard code this URL, but the structured data has
        // to have the absolute URL for the image
        let imageUrl = `https://tabsandspaces.io${logoUrl}`

        let schemaOrgJSONLD = [
            {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "publisher": {
                    "@type": "Organization",
                    "name": siteTitle,
                    "logo": {imageUrl}
                },
                "url":siteUrl,
                "image": {
                    "@type": "ImageObject",
                    "url": {imageUrl},
                    "width": 1200,
                    "height": 400
                },
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": siteUrl
                },
                "description": siteDescription
            }
        ];

        let rssFeedUrl = ''

        return (
            <Helmet>
                <meta title={siteTitle} />

                {/* Tells Google et al. to index the site*/}
                <meta name="ROBOTS" content="INDEX, FOLLOW" />

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
                { siteTitle ? <link href={rssFeedUrl} rel="alternate" type="application/rss+xml" title={siteTitle}/> : null }
                { siteTitle ? <link href={rssFeedUrl} rel="feed" type="application/rss+xml" title={siteTitle} /> : null }
            </Helmet>
        )
    }
}

export default Seo
