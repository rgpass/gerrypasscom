import { Blockquote } from "./Blockquote"
import { H1 } from "./H1"
import { H2 } from "./H2"
import { H3 } from "./H3"
import { H4 } from "./H4"
import { H5 } from "./H5"
import { H6 } from "./H6"
import { P } from "./P"

export * from "./H1"
export * from "./H2"
export * from "./H3"
export * from "./H4"
export * from "./H5"
export * from "./H6"
export * from "./P"

export const components = {
  blockquote: Blockquote,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: P,
}
