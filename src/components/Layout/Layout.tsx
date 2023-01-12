import * as React from "react"
import { FC, ReactNode } from "react"
import { Flex } from "@chakra-ui/react"
import { Footer, Header } from "./components"

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
        <main>{children}</main>
        <Footer />
      </Flex>
    </Flex>
  )
}

export default Layout
