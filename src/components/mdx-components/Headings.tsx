import React, { FC } from "react"
import { Heading, HeadingProps } from "@chakra-ui/react"

export const H1: FC<HeadingProps> = props => (
  <Heading as="h1" size="2xl" mt={10} {...props} />
)

export const H2: FC<HeadingProps> = props => (
  <Heading as="h2" size="xl" mt={8} {...props} />
)

export const H3: FC<HeadingProps> = props => (
  <Heading as="h3" size="lg" mt={6} {...props} />
)

export const H4: FC<HeadingProps> = props => (
  <Heading as="h4" size="md" mt={6} {...props} />
)

export const H5: FC<HeadingProps> = props => (
  <Heading as="h5" size="sm" mt={6} {...props} />
)

export const H6: FC<HeadingProps> = props => (
  <Heading as="h6" size="xs" mt={6} {...props} />
)
