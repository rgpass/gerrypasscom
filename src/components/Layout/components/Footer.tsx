import React, { FC } from "react"
import { ButtonGroup, IconButton, Stack, Text } from "@chakra-ui/react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export const Footer: FC = () => {
  return (
    <Stack align="center" as="footer" direction="row" justify="space-between">
      <Text color="subtle" fontSize="sm">
        © {new Date().getFullYear()}, Gerry Pass
      </Text>

      <ButtonGroup variant="ghost">
        <IconButton
          aria-label="LinkedIn"
          as="a"
          colorScheme="linkedin"
          href="https://www.linkedin.com/in/gerry-pass-11379340/"
          icon={<FaLinkedin fontSize="1.25rem" />}
        />
        <IconButton
          aria-label="GitHub"
          as="a"
          href="https://github.com/rgpass"
          icon={<FaGithub fontSize="1.25rem" />}
        />
      </ButtonGroup>
    </Stack>
  )
}
