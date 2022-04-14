/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export const SEO = (
  title,
  favicon,
  fallbackImage,
  canonical = "",
  description = "",
  lang = `en`,
  noIndex = false,
  image = {},
) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  )

  const fallbackImageUrl = fallbackImage?.url ?? ""
  const ogImageUrl =
    (image?.value?.length > 0 && image.value[0].url) || fallbackImageUrl

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    >
      <meta name="description" content={metaDescription} />
      <meta
        property="og:title"
        content={`${title} | ${site.siteMetadata.title}`}
      />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={site.siteMetadata.siteUrl} />
      <meta property="og:image" content={ogImageUrl} />
      {favicon && (
        <link rel="icon" type="image/png" href={favicon.url} sizes="16x16" />
      )}
      {canonical?.length > 0 && (
        <link rel="canonical" key={canonical} href={canonical} />
      )}
      {noIndex && <meta name="robots" content="noindex" />}
      <meta
        name="facebook-domain-verification"
        content="t0j6ii9hc6yeuvwg9pgeysnn7j28uv"
      />
    </Helmet>
  )
}
