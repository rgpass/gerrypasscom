import React, { FC } from "react"
import { Heading, Stack, Text } from "@chakra-ui/react"
import { H1 } from "../../mdx-components/H1"

interface Props {
  title: string
}

export const RootHeader: FC<Props> = ({ title }) => {
  return (
    <Stack as="header" spacing="4">
      <Stack spacing="1">
        <Text
          color="blue.500"
          fontSize={{ base: "sm", md: "md" }}
          fontWeight="semibold"
        >
          Personal website of
        </Text>
        <H1 w="full">{title}</H1>
      </Stack>
      <Heading as="h3" size="md" w="full">
        I write about software development, design, and product management, with
        a focus on startups.
      </Heading>
    </Stack>
  )
}
