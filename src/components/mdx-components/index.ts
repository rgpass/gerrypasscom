import { Code } from "@chakra-ui/react"
import { H1, H2, H3, H4, H5, H6 } from "./Headings"
import { Li, Ol, Ul } from "./Lists"
import { A, Hr } from "./Miscellaneous"
import { Blockquote, P } from "./Texts"

export * from "./Headings"
export * from "./Lists"
export * from "./Miscellaneous"
export * from "./Texts"

export const components = {
  a: A,
  blockquote: Blockquote,
  Code: Code,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  hr: Hr,
  li: Li,
  ol: Ol,
  p: P,
  ul: Ul,
}
