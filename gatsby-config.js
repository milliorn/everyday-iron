module.exports = {
  pathPrefix: `/gatsby-creative`,
  siteMetadata: {
    title: `Everyday Iron Workout Warehouse`,
    description: `(559) 577-8679 4762 W Jennifer Ave, Suite 105 Fresno, CA 93722`,
    author: `@gatsbyjs`,
  },
  plugins: [
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [
            "Merriweather:400,300,300italic,400italic,700,700italic",
            "Merriweather+Sans:400,700",
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'Merriweather',
          `Merriweather Sans`,
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: false,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://everyday-iron.netlify.app`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Everyday Iron Workout Warehouse`,
        short_name: `Everyday Iron`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `minimal-ui`,
        icon: `src/images/favicon.jpg`,
        icon_options: {
          // For all the options available,
          // please see the section "Additional Resources" below.
          purpose: `any maskable`,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`
  ]
}
