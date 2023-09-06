import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function Code({ children }: { children: React.ReactNode }) {
  return (
    <span className="prose dark:prose-invert">
      <code className="m-0">{children}</code>
    </span>
  )
}

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
            evolution of the <Code>cd</Code> command.
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
            <Code>||e</Code> into any field, it replaces it with{' '}
            <Code>rgpass@gmail.com</Code>.
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
          <Tool title="OpenAI">
            Once GPT-4 was released, I became obsessed with AI. Ask my wife and
            she&apos;ll immediately roll her eyes and say, &ldquo;Oh my God.
            That&apos;s all he talks about!&rdquo; I use it for everything, from
            having a programming tutor for new languages all the way to a
            cognitive behavioral therapist.
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
          <Tool title="Ruby on Rails">
            When I started, I knew I wanted to work with startups, so I chose
            Ruby on Rails. It&apos;s been my go-to backend framework ever since.
            But I&apos;m looking for a change, just not sure what to focus on
            yet.
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

        <ToolsSection title="VS Code Extensions">
          <Tool title="Auto Rename Tag">
            Are you tired of changing a HTML tag from a <Code>div</Code> to a{' '}
            <Code>span</Code> and having to change the closing tag as well? This
            extension does that for you.
          </Tool>
          <Tool title="Better Comments">
            Applies different styles/colors to your comments based on the first
            character. It makes it easier to differentiate &ldquo;TODO&rdquo;
            comments from &ldquo;DO NOT DELETE&rdquo; comments.
          </Tool>
          <Tool title="ESLint">
            No-brainer for any JavaScript or TypeScript development.
          </Tool>
          <Tool title="GitHub Copilot">
            For $100 a year, you can practically double your productivity when
            writing code. I don&apos;t know of another service that has a better
            ROI.
          </Tool>
          <Tool title="indent-rainbow">
            A small UI improvement that makes it easier to see how nested
            something is.
          </Tool>
          <Tool title="Path Intellisense">
            Another extension that should&apos;ve been included by default.
          </Tool>
          <Tool title="Prettier">
            Auto-formatting on save. What&apos;s not to love?
          </Tool>
          <Tool title="Pretty TypeScript Errors">
            TypeScript errors are notoriously difficult to read. This extension
            fixes that.
          </Tool>
          <Tool title="open in browser">
            The title says it all. Why was this not a default feature?
          </Tool>
          <Tool title="Rails Go to Spec">
            If you&apos;re doing Ruby on Rails development with RSpec, this is a
            must-have. With one shortcut, you can jump from a spec to its
            implementation and vice versa.
          </Tool>
          <Tool title="Tailwind CSS IntelliSense">
            Autocomplete for Tailwind classes. It&apos;s a must-have.
          </Tool>
          <Tool title="vscode-icons">
            Adds more icons to VS Code. Really just stuff that should come by
            default.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Workstation">
          <Tool title="16” MacBook Pro, M1 Pro, 16GB RAM (2021) (personal)">
            This is an amazing product. Even considering the hiccups that came
            with having a different architecture, it&apos;s still the best
            computer I&apos;ve used (excluding my work M2 Pro).
          </Tool>
          <Tool title="16” MacBook Pro, M2 Pro, 32GB RAM (2023) (work)">
            I thought my personal computer was fast, but this thing is a beast.
            With two external displays (so three screens total), all my normal
            apps, and a 13B parameter LLM all running at the same time, I have
            still yet to hear the fans.
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
              <Code>Alt</Code>+<Code>Tab</Code>
            </span>{' '}
            I just assume they don&apos;t know about this.
          </Tool>
          <Tool title="Dell S2722QC 27-inch 4K USB-C Monitor">
            Not the best monitor, but it gets the job done. I was allowed to
            reimburse up to $500 when I started at Artium, so I went with two of
            these and spent a little bit of my own money. Now I feel like a pro.
          </Tool>
          <Tool title="FEZIBO Standing Desk Anti-Fatigue Balance Board">
            Whenever I&apos;m standing at my desk, I&apos;m standing on this. If
            I don&apos;t, my back feels it the next day. Would recommend this to
            anyone who has a standing desk.
          </Tool>
          <Tool title="Flexispot Pro+ Standing Desk E7">
            This desk is awesome. It&apos;s motorized, has three memory slots,
            and it&apos;s built to be customizable. I went with white to make it
            obvious when I need to clean it.
          </Tool>
          <Tool title="GABRYLLY Ergonomic Mesh Office Chair">
            Before I bought this chair, my poor back was suffering. And it was
            unprofessional looking. This is the exact opposite. It&apos;s
            comfortable, professional, and it&apos;s mesh so it&apos;s
            breathable. The only downside is that it&apos;s so comfortable, I
            don&apos;t want to stand up.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
