import * as React from "react"
import { FC, ReactNode } from "react"
import { Flex, Stack } from "@chakra-ui/react"
import { MDXProvider } from "@mdx-js/react"
import { Footer, Header } from "./components"
import { components } from "../mdx-components"

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
        gap={12}
        maxW="3xl"
        px={{ base: 4, md: 8 }}
        py="8"
        w="full"
      >
        <Header isRootPath={isRootPath} title={title} />

        <main>
          <MDXProvider components={components as any}>{children}</MDXProvider>
        </main>

        <Footer />
      </Flex>
    </Flex>
  )
}

export default Layout
