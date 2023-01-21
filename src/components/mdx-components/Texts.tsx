import React, { FC } from "react"
import { Alert, AlertProps, Box, Text, TextProps } from "@chakra-ui/react"

export const P: FC<TextProps> = props => (
  <Text as="p" lineHeight="tall" mt={4} {...props} />
)

const quoteText: TextProps = {
  color: "gray.600",
  fontStyle: "italic",
  fontSize: "xl",
  lineHeight: "tall",
  mt: 0,
}
export const Blockquote: FC<AlertProps> = props => (
  <Box my={4}>
    <Alert
      as="blockquote"
      bgColor="unset"
      colorScheme="brand"
      fontSize="xl"
      lineHeight="short"
      sx={{ "& > p": quoteText }}
      role="none"
      variant="left-accent"
      {...props}
      mx={-4}
      w="unset"
    />
  </Box>
)
