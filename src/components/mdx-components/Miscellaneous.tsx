import React, { FC } from "react"
import {
  Divider,
  DividerProps,
  Code,
  CodeProps,
  Link,
  LinkProps,
} from "@chakra-ui/react"

export const Hr: FC<DividerProps> = props => (
  <Divider mt={5}>{props.children}</Divider>
)

export const A: FC<LinkProps> = props => (
  <Link
    fontWeight="bold"
    color="#00abe9"
    _hover={{ textDecoration: "underline" }}
    href={props.href}
    isExternal
  >
    {props.children}
  </Link>
)
