import React, { FC } from "react"
import {
  OrderedList,
  UnorderedList,
  ListProps,
  ListItem,
  ListItemProps,
} from "@chakra-ui/react"

export const Ul: FC<ListProps> = props => (
  <UnorderedList pl={4} mt={2} spacing={2}>
    {props.children}
  </UnorderedList>
)

export const Ol: FC<ListProps> = props => (
  <OrderedList pl={4} mt={2} spacing={2}>
    {props.children}
  </OrderedList>
)

export const Li: FC<ListItemProps> = props => (
  <ListItem lineHeight="tall" {...props}>
    {props.children}
  </ListItem>
)
