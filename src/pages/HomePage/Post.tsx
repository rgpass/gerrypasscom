import React, { FC } from "react"
import { Box, Heading, Stack, Text } from "@chakra-ui/react"
import { Link } from "gatsby"

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
            <Heading as="h3" itemProp="headline" size="lg">
              {post.frontmatter.title}
            </Heading>
          </Stack>
          <Text color="muted" itemProp="description">
            {description}
          </Text>
        </Stack>
      </Link>
    </Box>
  )
}
