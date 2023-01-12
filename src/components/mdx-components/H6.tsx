import React, { FC } from "react"
import { Heading, HeadingProps } from "@chakra-ui/react"

export const H6: FC<HeadingProps> = props => (
  <Heading as="h6" size="xs" {...props} />
)
