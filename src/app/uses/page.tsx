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

// TODO: `Link` component and `Code` component
export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff, in alphabetical order."
    >
      <div className="space-y-20">
        <ToolsSection title="Browser Extensions">
          <Tool title="1Password">
            The extension that pairs with the desktop app for easily storing and
            populating passwords.
          </Tool>
          <Tool title="Loom">
            I&apos;ve been using Loom since they were pre-revenue and I
            haven&apos;t found a reason to switch.
          </Tool>
        </ToolsSection>

        <ToolsSection title="CLIs">
          <Tool title="asdf">
            Before asdf, I used Volta to manage package management versioning.
            But it was always a hodge-podge of different version managers. asdf
            wraps them all into one.
          </Tool>
          <Tool title="GitHub CLI">
            GitHub released its own CLI and it&apos;s awesome. With it, you can
            do pretty much everything you can do on the UI. Personally, I use it
            for PR management.
          </Tool>
          <Tool title="Homebrew">
            The package manager for macOS. I use it to install pretty much
            everything, including other CLIs in the list and the apps in the
            next section.
          </Tool>
          <Tool title="oh-my-zsh">
            I don&apos;t know how anyone uses anything but zsh and oh-my-zsh is
            a great set of defaults and plugins for it, such as git.
          </Tool>
          <Tool title="z">
            A &ldquo;frecency&rdquo; based directory jumper. It&apos;s the next
            evolution of the{' '}
            <span className="prose dark:prose-invert">
              <code className="m-0">cd</code>
            </span>{' '}
            command.
          </Tool>
        </ToolsSection>

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
            next evolution of terminal apps. I&apos;ve been using it for a few
            months now and it&apos;s been great.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Productivity">
          <Tool title="Notion">
            I&apos;ve been using Notion for a few years now and it&apos;s been
            great. I use it as a second brain and as a Getting Stuff Done
            methodology organizer.
          </Tool>
          <Tool title="Project EVO Planner">
            The EVO Planner is a simple, yet effective, way of short-term goal
            setting, project tracking, and daily todo list organizer. It&apos;s
            been immensely helpful in getting my day started on the right foot.
          </Tool>
          <Tool title="Raycast">
            Raycast is a Spotlight replacement that&apos;s built for power
            users. There&apos;s a store where you can download free integrations
            that make it super powerful. The one I use the most is the image
            format converter and the mapping of snippets. ex. When I type{' '}
            <span className="prose dark:prose-invert">
              <code className="m-0">||e</code>
            </span>{' '}
            into any field, it replaces it with{' '}
            <span className="prose dark:prose-invert">
              <code className="m-0">rgpass@gmail.com</code>
            </span>
            .
          </Tool>
        </ToolsSection>

        <ToolsSection title="Services">
          <Tool title="Figma">
            Figma is a giant step up from Sketch and with its new Dev Mode,
            it&apos;s dead simple to use it for design and development. Combine
            Figma with{' '}
            <span className="prose dark:prose-invert">
              <a href="https://www.dive.club/advanced-figma">Academy</a>
            </span>{' '}
            and you can go from zero to poweruser in less than two weeks.
          </Tool>
          <Tool title="GitHub">
            I&apos;ve been forced to use an alternative to GitHub once in my
            career and it was rough. It&apos;s the best place to host your code
            and the community is amazing. Since being acquired by Microsoft,
            there&apos;s been a ton of improvements and freebies offered.
          </Tool>
          <Tool title="iwantmyname">
            Dead-simple domain registrar. I&apos;ve been using them for years.
            Their lack of design seems intentional so you can focus on the wide
            feature set.
          </Tool>
          <Tool title="Pop">
            If you liked Screenhero, you&apos;ll love Pop. Pop is actually made
            by the creator of Screenhero. It&apos;s a free alternative to Tuple
            but has a few less features. Definitely worth checking out if
            you&apos;re looking to pair program.
          </Tool>
          <Tool title="Tuple">
            Tuple is the best service in town for pair programming.
            Feature-rich, but costs money. My suggestion: if your employer will
            cover it, then it&apos;s a no-brainer.
          </Tool>
          <Tool title="Vercel">
            I used to be obsessed with Heroku and Vercel is the next evolution.
            The only downside is that it&apos;s taken away any motivation I have
            to <span className="italic">finally</span> learn AWS.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Tech">
          <Tool title="Cypress">
            Given that my old office was on the same floor as Cypress, it will
            always have a special place in my heart. But word is that Playwright
            is the new hotness.
          </Tool>
          <Tool title="NextJS">
            I just started using Next and I&apos;m convinced it&apos;s the best
            frontend framework out there, especially for React. Given that the
            React team recommends it over Create React App, I&apos;m not alone.
          </Tool>
          <Tool title="Prettier">
            So much time saved with this tool. I was patiently waiting for a
            Ruby plugin and was so happy when it was finally released.
          </Tool>
          <Tool title="React">
            The most popular frontend library and will be for a long time.
            &ldquo;My current job uses React and my next job will use
            React.&rdquo;.
          </Tool>
          <Tool title="TailwindCSS">
            (Not really a) Hot take: Tailwind is not only the best CSS
            framework, but it&apos;s one of the best ways to level up your CSS
            knowledge. With the Visual Studio Code extension, you can mouseover
            classes and see what they do.
          </Tool>
          <Tool title="TypeScript">
            It&apos;s 2023, you better be using TypeScript.
          </Tool>
          <Tool title="Vitest">
            Even if you&apos;re not using Vite, use Vitest. After using it for
            awhile, you&apos;ll start asking, &ldquo;Why does anyone still use
            Jest?&rdquo;
          </Tool>
        </ToolsSection>

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
            Anytime I see someone on a Mac using{' '}
            <span className="whitespace-nowrap">
              <span className="prose dark:prose-invert">
                <code className="m-0">Alt</code>
              </span>
              +
              <span className="prose dark:prose-invert">
                <code className="m-0">Tab</code>
              </span>
            </span>{' '}
            I just assume they don&apos;t know about this.
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
