import React, { FC } from "react"
import { Divider, DividerProps, Link, LinkProps } from "@chakra-ui/react"

export const Hr: FC<DividerProps> = props => (
  <Divider mt={5}>{props.children}</Divider>
)

export const A: FC<LinkProps> = props => (
  <Link
    color="blue.500"
    fontWeight="bold"
    href={props.href}
    isExternal
    _hover={{ textDecoration: "underline" }}
  >
    {props.children}
  </Link>
)
