// src/@chakra-ui/gatsby-plugin/theme.js
import { baseTheme, extendTheme } from "@chakra-ui/react"
const theme = {
  colors: {
    brand: baseTheme.colors.green,
  },
}

export default extendTheme(theme)
export { baseTheme }
