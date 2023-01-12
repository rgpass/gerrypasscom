import React, { FC } from "react"
import { Stack, Text } from "@chakra-ui/react"
import { H1, H4 } from "../../mdx-components"

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
      <H4 w="full">
        I write about software development, design, and product management, with
        a focus on startups.
      </H4>
    </Stack>
  )
}
