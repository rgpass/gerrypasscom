import React, { FC } from "react"
import { Box, Stack, Text } from "@chakra-ui/react"
import { Link } from "gatsby"
import { H2 } from "../../components/mdx-components"
import { Accent } from "../../components/Accent"

type Post = any
type Props = Post

export const Post: FC<Props> = ({ post }) => {
  const description = post.frontmatter.description || post.excerpt

  return (
    <Box as="article" itemScope itemType="http://schema.org/Article">
      <Link to={post.fields.slug} itemProp="url">
        <Stack spacing="2">
          <Stack spacing="1">
            <Accent fontSize="sm">{post.frontmatter.date}</Accent>
            <H2 itemProp="headline">{post.frontmatter.title}</H2>
          </Stack>

          <Text color="muted" itemProp="description">
            {description}
          </Text>
        </Stack>
      </Link>
    </Box>
  )
}
