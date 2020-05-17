import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({description, lang, title, meta}) => {
    const { site } = useStaticQuery(
        graphql`
            query{
                site{
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `
    )

    const metaDescription = description || site.siteMetadata.description

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={site.siteMetadata.title}
            titleTemplate={site.siteMetadata.title}
            meta={[
                {
                    name: 'description',
                    content: metaDescription
                },
                {
                    name: 'title',
                    content: site.siteMetadata.title
                },
                {
                    property: 'og:title',
                    content: site.siteMetadata.title
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:description',
                    content: metaDescription
                },
                {
                    property: 'og:url',
                    content: 'https://coding2success.com'
                },
                {
                    property: 'og:image',
                    content: 'https://raw.githubusercontent.com/agyin3/coding-2-success/master/src/assets/preview.png'
                },
                {
                    name: 'twitter:card',
                    content: `summary`,
                },
                {
                    name: 'twitter:creator',
                    content: site.siteMetadata.author,
                },
                {
                    name: 'twitter:title',
                    content: site.siteMetadata.title,
                },
                {
                    name: 'twitter:description',
                    content: metaDescription,
                }
            ].concat(meta)}
        />
    )
}

SEO.defaultProps = {
    lang: 'en',
    meta: [],
    description: ''
}

SEO.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    lang: PropTypes.string
}

export default SEO