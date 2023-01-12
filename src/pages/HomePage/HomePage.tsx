import { Heading, Stack, Text } from "@chakra-ui/react"
import { Link, PageProps } from "gatsby"
import React, { FC } from "react"
import Bio from "../../components/Bio"
import Layout from "../../components/Layout/Layout"

type Post = any

type DataProps = {
  allMdx: {
    nodes: Post[]
  }
  site: {
    siteMetadata?: {
      title: string
    }
  }
}

export const HomePage: FC<PageProps<DataProps>> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMdx.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Stack spacing="12">
        {posts.map(post => {
          const description = post.frontmatter.description || post.excerpt

          return (
            <Link to={post.fields.slug} itemProp="url">
              <Stack spacing="4">
                <Stack spacing="1.5">
                  <Text color="blue.500" fontSize="sm" fontWeight="semibold">
                    {post.frontmatter.date}
                  </Text>
                  <Heading as="h3" size="lg">
                    {post.frontmatter.title}
                  </Heading>
                </Stack>
                <Text color="muted">{description}</Text>
              </Stack>
            </Link>
          )
        })}
      </Stack>
    </Layout>
  )
}
