// src/@chakra-ui/gatsby-plugin/theme.js
import { baseTheme, extendTheme } from "@chakra-ui/react"
const theme = {
  colors: {
    blue: {
      500: "red",
    },
  },
}

export default extendTheme(theme)
export { baseTheme }
