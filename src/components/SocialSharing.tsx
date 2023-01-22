import React, { FC } from "react"
import { HStack, IconButton } from "@chakra-ui/react"
import { FaFacebook, FaHackerNews, FaReddit, FaTwitter } from "react-icons/fa"
import { P } from "./mdx-components"

const siteUrl = "https://www.gerrypass.com"

const share = (e, name: string, size: string): void => {
  window.open(e.currentTarget.href, name, size)
  e.preventDefault()
}

interface Props {
  slug: string
  title: string
}

export const SocialSharing: FC<Props> = ({ slug, title }) => {
  const url = `${siteUrl}${slug}`

  return (
    <HStack>
      <P mt="unset">Share: &nbsp;</P>

      <IconButton
        as="a"
        aria-label="Share on Twitter"
        href={`https://twitter.com/share?text=${title} @rgp4ss&url=${url}`}
        icon={<FaTwitter />}
        onClick={e => share(e, "twitter-share", "width=550,height=235")}
      />

      <IconButton
        as="a"
        aria-label="Share on Reddit"
        href={`http://www.reddit.com/submit?title=${title}&url=${url}`}
        icon={<FaReddit />}
        onClick={e => share(e, "reddit-share", "width=950,height=660")}
      />

      <IconButton
        as="a"
        aria-label="Share on Hacker News"
        href={`https://news.ycombinator.com/submitlink?t=${title}&u=${url}`}
        icon={<FaHackerNews />}
        onClick={e => share(e, "hn-share", "width=550,height=350")}
      />

      <IconButton
        as="a"
        aria-label="Share on Facebook"
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
        icon={<FaFacebook />}
        onClick={e => share(e, "facebook-share", "width=580,height=296")}
      />
    </HStack>
  )
}
