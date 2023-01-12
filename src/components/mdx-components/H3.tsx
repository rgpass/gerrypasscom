import React, { FC } from "react"
import { Heading, HeadingProps } from "@chakra-ui/react"

export const H3: FC<HeadingProps> = props => (
  <Heading as="h3" size="lg" {...props} />
)
