import React, { useId } from "react"
import { chakra, useColorModeValue } from "@chakra-ui/react"
import Highlight, { defaultProps } from "prism-react-renderer"
import darkTheme from "prism-react-renderer/themes/nightOwl"
import lightTheme from "prism-react-renderer/themes/nightOwlLight"

// Stolen from Nikolov Lazar's blog
// ref: https://github.com/nikolovlazar/nikolovlazar.com/blob/main/src/components/mdx-components/index.tsx
const ChakraHighlight = chakra(Highlight, {
  shouldForwardProp: prop =>
    ["Prism", "theme", "code", "language", "children"].includes(prop),
})

const ChakraCode = props => (
  <chakra.code
    apply="mdx.code"
    color="gray.900"
    _dark={{
      color: "gray.200",
      bg: "gray.900",
    }}
    bg="gray.100"
    px={1}
    py={0.5}
    rounded="md"
    {...props}
  />
)

export const CodeHighlight = ({
  children: codeString,
  className: language,
}: any) => {
  const theme = useColorModeValue(lightTheme, darkTheme)
  const codeId = useId()

  if (!language) return <ChakraCode>{codeString}</ChakraCode>

  language = language.replace("language-", "")
  const showLineNumbers = !["shell", "text"].includes(language)

  return (
    <ChakraHighlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        tokens.pop()
        return (
          <div data-language={className}>
            <chakra.pre
              className={className}
              sx={{ ...style, backgroundColor: "gray.50" }}
              _dark={{
                backgroundColor: "gray.900",
              }}
              overflowX="auto"
              rounded="md"
              p={4}
              mx={-4}
            >
              {tokens.map((line, i) => {
                const lineProps = getLineProps({ line, key: i })
                return (
                  <chakra.div
                    {...lineProps}
                    display="table-row"
                    key={`${codeId}.${i}`}
                  >
                    {showLineNumbers && (
                      <chakra.span
                        key={`${codeId}.${i}.number`}
                        w={8}
                        display="table-cell"
                        textAlign="right"
                        userSelect="none"
                        color="blackAlpha.500"
                        pr={3}
                        _dark={{
                          color: "whiteAlpha.500",
                        }}
                      >
                        {i + 1}
                      </chakra.span>
                    )}
                    {line.map((token, key) => {
                      return (
                        <chakra.span
                          {...getTokenProps({ token, key })}
                          key={`${codeId}.${i}.${key}`}
                        />
                      )
                    })}
                  </chakra.div>
                )
              })}
            </chakra.pre>
          </div>
        )
      }}
    </ChakraHighlight>
  )
}
