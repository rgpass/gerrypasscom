import React, { FC } from "react"
import { Heading, HeadingProps } from "@chakra-ui/react"

export const H1: FC<HeadingProps> = props => (
  <Heading as="h1" size="3xl" {...props} />
)
