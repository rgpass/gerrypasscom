import React, { FC } from "react"
import { Heading, HeadingProps } from "@chakra-ui/react"

export const H2: FC<HeadingProps> = props => (
  <Heading as="h2" size="xl" {...props} />
)
