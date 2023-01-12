import React, { FC } from "react"
import { Heading, HeadingProps } from "@chakra-ui/react"

export const H4: FC<HeadingProps> = props => (
  <Heading as="h4" size="md" {...props} />
)
