// src/@chakra-ui/gatsby-plugin/theme.js
import { baseTheme, extendTheme } from "@chakra-ui/react"
import "@fontsource/inter"

const theme = {
  colors: {
    brand: baseTheme.colors.green,
  },
  fonts: {
    heading: `Inter, ${baseTheme.fonts.heading}`,
    body: `Inter, ${baseTheme.fonts.body}`,
  },
}

export default extendTheme(theme)
export { baseTheme }
