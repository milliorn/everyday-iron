module.exports = {
  pathPrefix: `/gatsby-creative`,
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `(559) 577-8679 4762 W Jennifer Ave, Suite 105 Fresno, CA 93722`,
    author: `@gatsbyjs`,
  },
  plugins: [
    'gatsby-plugin-netlify',
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
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
    resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://everyday-iron.netlify.app`,
      }
    }
      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.dev/offline
      `gatsby-plugin-offline`,
  ],
}
