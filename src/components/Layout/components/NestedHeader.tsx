import React, { FC } from "react"
import { Link as CUILink } from "@chakra-ui/react"
import { Link } from "gatsby"

interface Props {
  title: string
}

export const NestedHeader: FC<Props> = ({ title }) => {
  return (
    <CUILink
      as={Link}
      color="blue.500"
      fontWeight="semibold"
      fontSize="xl"
      to="/"
    >
      {title}
    </CUILink>
  )
}
