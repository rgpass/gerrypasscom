import React, { FC } from "react"
import { Box, Stack, Text } from "@chakra-ui/react"
import { Link } from "gatsby"
import { H2 } from "../../components/mdx-components"

type Post = any
type Props = Post

export const Post: FC<Props> = ({ post }) => {
  const description = post.frontmatter.description || post.excerpt

  return (
    <Box as="article" itemScope itemType="http://schema.org/Article">
      <Link to={post.fields.slug} itemProp="url">
        <Stack spacing="4">
          <Stack spacing="1.5">
            <Text color="blue.500" fontSize="sm" fontWeight="semibold">
              {post.frontmatter.date}
            </Text>

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
