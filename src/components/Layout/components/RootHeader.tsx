import React, { FC } from "react"
import { Heading, Stack, Text } from "@chakra-ui/react"

interface Props {
  title: string
}

export const RootHeader: FC<Props> = ({ title }) => {
  return (
    <Stack as="header" spacing="4">
      <Stack spacing="1">
        <Text
          color="green.600"
          fontSize={{ base: "sm", md: "md" }}
          fontWeight="semibold"
        >
          Personal website of
        </Text>
        <Heading as="h1" size="3xl" w="full">
          {title}
        </Heading>
      </Stack>
      <Heading as="h3" size="md" w="full">
        I write about software development, design, and product management, with
        a focus on startups.
      </Heading>
    </Stack>
  )
}
