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
      color="brand.500"
      fontSize="xl"
      fontWeight="semibold"
      to="/"
    >
      {title}
    </CUILink>
  )
}
