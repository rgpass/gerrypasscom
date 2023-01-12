import * as React from "react"
import { FC, ReactNode } from "react"
import { Flex } from "@chakra-ui/react"
import { Footer, Header } from "./components"

import { MDXProvider } from "@mdx-js/react"

const MyH1 = props => <h1 style={{ color: `purple` }} {...props} />
const MyParagraph = props => (
  <p style={{ fontSize: "18px", lineHeight: 1.6 }} {...props} />
)

const components = {
  h1: MyH1,
  p: MyParagraph,
}

interface Props {
  children: ReactNode
  location: Location
  title: string
}

const getIsRootPath = (location: Location) => {
  // @ts-ignore - __PATH_PREFIX__ is a global variable
  const rootPath = `${__PATH_PREFIX__}/`
  return location.pathname === rootPath
}

const Layout: FC<Props> = ({ children, location, title }) => {
  const isRootPath = getIsRootPath(location)

  return (
    <Flex align="center" justify="center" w="full">
      <Flex
        direction="column"
        gap="12"
        px={{ base: 4, md: 8 }}
        py="8"
        maxW="3xl"
        w="full"
      >
        <Header isRootPath={isRootPath} title={title} />
        <main>
          <MDXProvider components={components}>{children}</MDXProvider>
        </main>
        <Footer />
      </Flex>
    </Flex>
  )
}

export default Layout
