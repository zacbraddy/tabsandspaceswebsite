import React from 'react'
import Helmet from 'react-helmet'

class Seo extends React.Component {
    render() {
        let siteTitle = this.props.siteTitle
        let siteDescription = this.props.siteDescription
        let siteUrl = 'http://tabsandspaces.io/'
        let siteImageUrl = '' //We'll need some kind of pre-rendered header image for Twitter & Facebook cards
        let twitterHandle = '@tabsandspacespod' //assumption

        let schemaOrgJSONLD = [
            {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "publisher": {
                    "@type": "Organization",
                    "name": siteTitle,
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://dotnetcore.show/content/images/2018/08/jamie-taylor-logo-podcast.svg",
                        "width": 60,
                        "height": 60
                    }
                },
                "url":siteUrl,
                "image": {
                    "@type": "ImageObject",
                    "url": siteImageUrl,
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
                <meta property="og:image" content={siteImageUrl} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="400" />

                {/* Twitter specific Open Graph stuff */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={siteTitle} />
                <meta name="twitter:description" content={siteDescription} />
                <meta name="twitter:url" content={siteUrl} />
                <meta name="twitter:image" content={siteImageUrl} />
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
