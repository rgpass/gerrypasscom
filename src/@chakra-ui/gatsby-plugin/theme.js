// src/@chakra-ui/gatsby-plugin/theme.js
import { baseTheme, extendTheme } from "@chakra-ui/react"
const theme = {
  colors: {
    brand: baseTheme.colors.red,
  },
}

export default extendTheme(theme)
export { baseTheme }
