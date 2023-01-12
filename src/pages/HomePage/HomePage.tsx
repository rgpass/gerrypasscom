import { Stack } from "@chakra-ui/react"
import { PageProps } from "gatsby"
import React, { FC } from "react"
import Bio from "../../components/Bio"
import Layout from "../../components/Layout/Layout"
import { Post } from "./Post"

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
        {posts.map(post => (
          <Post key={post.fields.slug} post={post} />
        ))}
      </Stack>
    </Layout>
  )
}
