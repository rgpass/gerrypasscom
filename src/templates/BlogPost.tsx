import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/Bio"
import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo"
import { H1, Hr } from "../components/mdx-components"
import { Flex, Stack } from "@chakra-ui/react"
import { Accent } from "../components/Accent"

import { SocialSharing } from "../components/SocialSharing"

const BlogPostTemplate = ({
  data: { previous, next, site, mdx: post },
  location,
  children,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Stack spacing={8}>
        <article itemScope itemType="http://schema.org/Article">
          <Stack as="header" spacing={2}>
            <H1 itemProp="headline" mt={0}>
              {post.frontmatter.title}
            </H1>
            <Accent>{post.frontmatter.date}</Accent>
          </Stack>

          <section itemProp="articleBody">{children}</section>
        </article>

        <Hr />

        <SocialSharing slug={post.fields.slug} title={post.frontmatter.title} />

        <Hr />

        <Flex as="nav" justify="space-between" mt={6}>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}

          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </Flex>
      </Stack>
    </Layout>
  )
}

export const Head = ({ data: { mdx: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
