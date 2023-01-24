/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

const siteMetadata = {
  title: `Gerry Pass`,
  author: {
    name: `Gerry Pass`,
    summary: `who lives and works in Atlanta building useful things.`,
  },
  description: `Gerry Pass' personal website, covering software development and startups.`,
  siteUrl: `https://www.gerrypass.com/`,
  social: {
    github: "rgpass",
  },
}

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
        /**
         * @property {boolean} [isBaseProvider=false]
         * if true, will render `<ChakraBaseProvider>`
         */
        isBaseProvider: false,
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `{
              allMdx(sort: {frontmatter: {date: DESC}}) {
                nodes {
                  excerpt
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date
                  }
                }
              }
            }`,
            output: "/rss.xml",
            title: "Gerry Pass' Blog RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gerry Pass' personal website`,
        short_name: `Gerry Pass`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/profile-pic-modified.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.gerrypass.com`,
        stripQueryString: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-8SM5SQ1XDY", // Google Analytics / GA
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        // site.siteMetadata.siteUrl is required for the plugin.
        // allSitePage is helpful for non-blog posts.
        // allMdx is the list of blog posts.
        query: `{
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            nodes {
              path
            }
          }
          allMdx(sort: {frontmatter: {date: DESC}}) {
            nodes {
              excerpt
              fields {
                slug
              }
              frontmatter {
                title
                date
              }
            }
          }
        }`,
        resolvePages: ({ allMdx }) => {
          const blogPosts = allMdx.nodes.map(node => ({
            path: `blog${node.fields.slug}`,
            lastmod: node.frontmatter.date,
            changefreq: "weekly",
            priority: 0.7,
          }))

          const dates = allMdx.nodes.map(node => node.frontmatter.date)
          const maxDate = dates.sort().reverse()[0]

          const homePage = {
            path: "/",
            priority: 0.7,
            lastmod: maxDate,
          }

          return [...blogPosts, homePage]
        },
        serialize: ({ path, ...args }) => ({ url: path, ...args }),
      },
    },
  ],
}
