import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Gerry Pass',
    default: 'Gerry Pass - Software designer, founder, and amateur astronaut',
  },
  description:
    'I’m Gerry Pass, a software developer and startup-enthusiast based in Atlanta, GA. I was the first employee at Florence Healthcare and I’m currently working as a consultant at Artium. While I specialize in full-stack web development, I’ve made a mobile app for a Fortune 500 company, created a Figma component library with 600+ downloads, and have taught & mentored dozens of aspiring developers.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
