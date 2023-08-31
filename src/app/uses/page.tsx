import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff, in alphabetical order."
    >
      <div className="space-y-20">
        <ToolsSection title="Desktop Apps">
          <Tool title="1Password">
            After{' '}
            <span className="prose dark:prose-invert">
              <a href="https://blog.lastpass.com/2022/12/notice-of-recent-security-incident/">
                LastPass&apos; security breach
              </a>
            </span>
            , I switched to 1Password and have only good things to say. I use
            the premium version to shave a few seconds off when needing to input
            passwords on both my computer and phone.
          </Tool>
          <Tool title="Arc">
            Arc is the browser that we all wish Chrome could be.
          </Tool>
          <Tool title="Google Chrome">
            The defacto standard for web development, assuming you&apos;re OK
            with the tracking. The only reason I use Safari or Firefox now is
            for testing and fixing browser-specific bugs.
          </Tool>
          <Tool title="Visual Studio Code">
            I used to be a Sublime Text fanboy, but once I learned that VS Code
            had the ability to map shortcuts to Sublime&apos;s, I was sold.
            I&apos;ve been using it ever since.
          </Tool>
          <Tool title="Warp">
            Built with Rust and with a much stronger UX-focus, it&apos;s the
            next evolution of terminals. I&apos;ve been using it for a few
            months now and it&apos;s been great.
          </Tool>
        </ToolsSection>

        {/* <ToolsSection title="Development tools">
          <Tool title="Sublime Text 4">
            I don’t care if it’s missing all of the fancy IDE features everyone
            else relies on, Sublime Text is still the best text editor ever
            made.
          </Tool>
          <Tool title="iTerm2">
            I’m honestly not even sure what features I get with this that aren’t
            just part of the macOS Terminal but it’s what I use.
          </Tool>
          <Tool title="TablePlus">
            Great software for working with databases. Has saved me from
            building about a thousand admin interfaces for my various projects
            over the years.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            We started using Figma as just a design tool but now it’s become our
            virtual whiteboard for the entire company. Never would have expected
            the collaboration features to be the real hook.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Alfred">
            It’s not the newest kid on the block but it’s still the fastest. The
            Sublime Text of the application launcher world.
          </Tool>
          <Tool title="Reflect">
            Using a daily notes system instead of trying to keep things
            organized by topics has been super powerful for me. And with
            Reflect, it’s still easy for me to keep all of that stuff
            discoverable by topic even though all of my writing happens in the
            daily note.
          </Tool>
          <Tool title="SavvyCal">
            Great tool for scheduling meetings while protecting my calendar and
            making sure I still have lots of time for deep work during the week.
          </Tool>
          <Tool title="Focus">
            Simple tool for blocking distracting websites when I need to just do
            the work and get some momentum going.
          </Tool>
        </ToolsSection> */}

        <ToolsSection title="Workstation">
          {/* TODO: Work computer */}
          <Tool title="16” MacBook Pro, M1 Pro, 16GB RAM (2021) (personal)">
            This is an amazing product. Even considering the hiccups that came
            with having a different architecture, it&apos;s still the best
            computer I&apos;ve used (excluding my work M2 Pro).
          </Tool>
          <Tool title="Apple Magic Keyboard with Touch ID">
            This has been my go-to keyboard for years and using Touch ID saves
            me so much time. I love how easy it is to type on it while not
            causing an echo that mechanical keyboards do.
          </Tool>
          <Tool title="Apple Magic Trackpad">
            I&apos;ve always been a fan of the multiple desktops. The trackpad
            and four-finger swipe makes it so easy to switch between them.
            Anytime I see someone on a Mac using <code>Alt</code>+
            <code>Tab</code> I just assume they don&apos;t know about this.
          </Tool>
          {/* TODO: Chair */}
          {/* TODO: Desk */}
          {/* TODO: Monitors */}
          {/* TODO: Balance board */}
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
