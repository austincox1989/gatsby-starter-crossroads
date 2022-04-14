import React from "react"
import { graphql, PageProps, useStaticQuery } from "gatsby"
import { SEO } from "components/seo/seo"
import { HeroBanner } from "components/hero/HeroBanner"
import { useLogos } from "hooks/queries/settings/useLogos"
import { ContentBlocks } from "components/content-blocks/ContentBlocks"
import { Layout } from "components/layout"
import { useGeneralSettings } from "hooks/useGeneralSettings"








const getHomePage = graphql`
    query Home {
        allKontentItemPage(filter: { elements: { slug: { value: { eq: "/" } } } }) {
            nodes {
                elements {
                    seo_metadata__meta_description {
                        value
                    }
                    seo_metadata__meta_title {
                        value
                    }
                    banner {
                        value {
                            ...HeroBannerFragment
                        }
                    }
                    rich_content {
                        ...ContentBlocksParserFragment
                    }
                }
            }
        }
    }
`

export default IndexPage