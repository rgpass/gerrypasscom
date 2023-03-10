import React, { FC } from "react"
import { Text, TextProps } from "@chakra-ui/react"

export const Accent: FC<TextProps> = props => (
  <Text
    color="brand.600"
    fontSize={{ base: "sm", md: "md" }}
    fontWeight="semibold"
    {...props}
  />
)
