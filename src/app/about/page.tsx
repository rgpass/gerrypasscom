import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description: 'I’m Gerry Pass. I live in Atlanta, where I build the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I’m Gerry Pass. I live in Atlanta, where I build a better future.
          </h1>
          <div className="prose mt-6 space-y-7 text-base text-zinc-600 dark:prose-invert dark:text-zinc-400">
            <p>
              Most devs who make a portfolio site like this one tell a story of
              how they&apos;ve loved computers and programming since they were a
              kid. My story is a little different.
            </p>

            <p>
              While I did enjoy computers as a kid, it was mostly for gaming,
              socializing on AOL Instant Messenger (lol), and making{' '}
              <a href="https://www.angelfire.lycos.com/">Angelfire sites</a>.
              When I was a freshman in college, my colleague and I would barter
              programming homework for physics homework. I was the one who did
              the physics homework.
            </p>

            <p>
              A couple years later when I was a junior, I was working on a
              homework assignment that could&apos;ve been solved in less than
              100 lines of code. Instead, I made a{' '}
              <span className="italic">giant</span> Excel file that spanned
              multiple sheets. My classmates who did it programmatically
              finished hours before me, but I was stubborn and wasn&apos;t
              interested in programming.
            </p>

            <p>
              After college, the reality of my career choice being a poor fit
              finally hit. I knew I wanted out, but didn&apos;t know where to
              go. That&apos;s when I took a systematic approach to choosing a
              new career.
            </p>

            <p>
              Combining the results from &ldquo;top 100 happiest jobs,&rdquo;
              &ldquo;top 100 most in demand jobs,&rdquo; and a matrix of my
              strengths & interests, there was a clear winner: software
              development, specifically web development.
            </p>

            <p>
              A few months later, I put in my two-week notice to teach myself
              Ruby on Rails full-time, starting with{' '}
              <a href="https://www.railstutorial.org/">
                Michael Hartl&apos;s Rails Tutorial
              </a>
              . I chose Rails because I had just quit the 3rd largest company in
              the world and I wanted to work where people were passionate about
              the company&apos;s mission and where I wouldn&apos;t be a cog in
              the wheel. Knowing that Rails was the go-to language of startups
              at the time, it was a no-brainer.
            </p>

            <p>
              Since then, I&apos;ve come to realize it was one of the best
              decisions of my life. It&apos;s allowed me to work with smart, yet
              humble, people who are passionate about creating a better future
              through software.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://github.com/rgpass"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/gerry-pass-11379340/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:rgpass+portfolio@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              rgpass@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
