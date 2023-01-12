import React, { FC } from "react"
import { Heading, Link as CUILink } from "@chakra-ui/react"
import { Link } from "gatsby"

interface Props {
  title: string
}

export const NestedHeader: FC<Props> = ({ title }) => {
  return (
    <Link to="/">
      <CUILink color="blue.500" fontWeight="semibold" fontSize="xl">
        {title}
      </CUILink>
    </Link>
  )
}
