import React, { FC } from "react"
import { Alert, AlertProps, Box } from "@chakra-ui/react"

export const Blockquote: FC<AlertProps> = props => (
  <Box>
    <Alert
      as="blockquote"
      bgColor="unset"
      colorScheme="brand"
      role="none"
      variant="left-accent"
      {...props}
      w="unset"
      mx={-4}
    />
  </Box>
)
