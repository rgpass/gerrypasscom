import React, { FC } from "react"
import { Heading, HeadingProps } from "@chakra-ui/react"

export const H5: FC<HeadingProps> = props => (
  <Heading as="h5" size="sm" {...props} />
)
